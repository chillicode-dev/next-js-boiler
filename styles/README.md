### /styles/

#### Next.js build-in-css

Подробнее про подключение SCSS в Next.js можно почитать [здесь](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support).

#### CSS-модули и стили отдельных компонентов

В проекте используются [CSS-модули](https://github.com/css-modules/css-modules), это значит, что мы импортируем стили в компоненты в качестве объектов, поля которых
затем превращаются в хэшированные строки и становятся уникальными в контексте приложения.

Например, есть компонент `Button.js`:

```javascript
import React from 'react';
import style from './style.module.scss';

const Button = ({children}) => {
  return (
    <button className={style.Button}>
      <span className={style.text}>{children}</span>
    </button>
  );
};

export default Grid;
```

И у него есть своя таблица стилей `style.module.scss`:

```scss
.Button {
  // моднявые стили кнопки
}

.text {
  // моднявые стили текста кнопки
}
```

И есть компонент `Tab.js`:

```javascript
import React from 'react';
import style from './style.module.scss';

const Tab = ({children}) => {
  return (
    <button className={style.Tab}>
      <span className={style.text}>{children}</span>
    </button>
  );
};

export default Grid;
```

И у него тоже своя таблица стилей `style.module.scss`:

```scss
.Tab {
  // моднявые стили таба
}

.text {
  // моднявые стили текста таба
}
```

Здесь селектор `.text` в Button никак не связан с селектором `.text` в Tab и на выходе
это абсолютно разные классы. То есть, стили каждого компонента инкапсулированы и избавляют разработчика
от извечной головной боли их наименования, спасают от случайного перезатирания другим таким же селектором и
отлично подходят для больших проектов.

Если же в стилях мы хотим описать глобальный селектор (чаще всего для того, чтобы изменить стили в какой-нибудь
вендорной библиотеке), то используем конструкцию `:global(selector)`:

```scss
:global(.library__selector) .myFancyButton {
}
```

Правила:

1. Корневой элемент каждого компонента должен иметь className, идентичный названию компонента с большой буквы
2. Все селекторы должны быть записаны в camelCase
3. Если есть класс одного компонента, а в другом компоненте нужно переопределить некоторые его свойства,
   для страховки его вес нужно усилить путем вложенности селекторов

#### Структура папки `/styles/`

```
./styles
 ├─config/
 ├─preferences/
 ├─vendor/
 ├─fonts.scss
 └─base.scss
```

- `/styles/config/` - здесь хранятся переменные в JSON-файлах для того,
  чтобы можно было использовать единую конфигурацию как внутри JS, так и в SCSS
  В SCSS переменные доступны глобально, в JS их необходимо импортировать в виде
  `import {brandColor} from 'styles/config/colors'` или `import breakpoints from 'styles/config/breakpoints'`.
- `/styles/preferences/` - SCSS переменные, миксины и функции для использования только внутри SCSS.
  Все они доступны глобально внутри SCSS-кода
- `/styles/vendor/` - вендорные стили библиотек
- `/styles/fonts.scss` - подключение шрифтов
- `/styles/base.scss` - общие стили, применимые для всего приложения (например для `body` или `html`)

#### Media-запросы

Все брейкпоинты для медия-запросов конфигурируются в файле `/styles/config/breakpoints.json`.
Каждый брейкпоинт является максимальной шириной от 0 до указанного значения.
Например, брейкпоинт `tablet` будет означать все устройства до 1024px.

Миксины для медия-запросов конфигурируются в `/styles/preferences/grid.scss`.

Например, хотим создать медия-запрос для стилей на мобильных устройствах.

Бро:

```scss
.column {
  // Стили для десктопа

  @include onPhone() {
    // Стили для телефона
  }
}
```

Не бро:

```scss
.column {
  // Стили для десктопа
}

@media all and (max-width: 767px) {
  .column {
    // Стили для телефона
  }
}
```

#### Работа с url(...)

Поскольку реализации Sass не поддерживают перезапись URL-адресов, все ресурсы должны иметь относительные пути.

Для обхода этой проблемы и доступа к папке `/public` можно интерполировать переменную `$publicPath` в путь к файлу, например:

```scss
.image {
  background-image: url('#{$publicPath}/assets/images/test-next-logo.png');
}
```
