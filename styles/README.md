### /styles/
#### CSS-модули и стили отдельных компонентов
В проекте используются [CSS-модули](https://github.com/css-modules/css-modules), это значит, что мы импортируем стили в компоненты в качестве объектов, поля которых 
затем превращаются в хешированные строки и становятся уникальными в контексте приложения.

Например, есть компонент `Button.js`:
```javascript
import React from 'react';
import style from './style.scss';

const Button = ({children}) => {
  return (
    <button className={style.Button}>
      <span className={style.text}>{children}</span>
    </button>
  );
};

export default Grid;
```
И у него есть своя таблица стилей `style.scss`:
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
import style from './style.scss';

const Tab = ({children}) => {
  return (
    <button className={style.Tab}>
      <span className={style.text}>{children}</span>
    </button>
  );
};

export default Grid;
```
И у него тоже своя таблица стилей `style.scss`:
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
3. Если у нас есть класс одного компонента, а в другом компоненте он используется и мы хотим перебить его некоторые свойства, 
для страховки его вес нужно усилить путем вложенности селекторов

#### Структура папки `/styles/`
```
./styles
 ├─config/
 ├─preferences/
 ├─vendor/
 └─index.scss
```

- `/styles/config/` - здесь хранятся переменные в JSON-файлах для того, 
чтобы можно было использовать единую конфигурацию как внутри JS, так и в SCSS
В SCSS переменные доступны глобально, в JS их необходимо импортировать в виде 
`import {brandColor} from 'styles/config/colors'` или `import breakpoints from 'styles/config/breakpoints'`.
- `/styles/preferences/` - SCSS переменные, миксины и функции для использования только внутри SCSS.
Все они доступны глобально внутри SCSS-кода
- `/styles/vendor/` - вендорные стили библиотек
- `/styles/index.scss` - общие стили, применимые для всего приложения (например для `body` или `html`)

#### Сетка
Сетка внутри приложений строится на основе функций библиотеки [Susy 3](https://www.oddbird.net/susy/docs/).

Все параметры сетки конфигурируются в файле `/styles/config/grid.json`. 

К примеру, в `grid.json` у нас указана 12-колоночная сетка с отступом между колонками в 15 пикселей:
```json
{
  "columnsCount": 12,
  "gutterSize": 15
}
```
Значит, для создания сетки по 3 колонки в строке создаем:
```javascript
import React from 'react';
import style from './style.scss';

const Grid = () => {
  return (
    <div className={style.row}>
      <div className={style.column}>1</div>
      <div className={style.column}>2</div>
      <div className={style.column}>3</div>
      <div className={style.column}>4</div>
      <div className={style.column}>5</div>
      <div className={style.column}>6</div>
    </div>
  );
};

export default Grid;
``` 

А в style.scss будет:
```scss
.row {
  display: flex;
  flex-wrap: wrap;
}

.column {
  width: span(4);
  margin-right: gutter();
  margin-bottom: gutter();
  @include disableLastMargin(right);
  @include disableNthMargin(3n, right);
}
```

Здесь:
- `span(4)` - расчитывыет размер колонки в процентах, где 4 - ширина каждой колонки из 12.
- `gutter()` - создает указанный в конфиге отступ
- `disableLastMargin(right)` - миксин, убирающий отступ с указанной стороны у последнего элемента с таким селектором 
(аналогичен `.column:last-child {margin-right: 0}`)
- `disableNthMargin(3n, right)` - миксин, убирающий отступ с указанной стороны у nth-элемента с таким селектором 
(аналогичен `.column:nth-child(3n) {margin-right: 0}`)

Все миксины, связанные с сеткой, можно посмотреть в файле `/styles/preferences/grid.scss`.

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

  @include onPhone {
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