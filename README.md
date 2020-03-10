# Pullquest frontend
Frontend для проекта Pullquest на React + Next.js.

## Содержание
1. [Что внутри?](#inside)
2. [Начало работы](#get-started)
    - Окружение
    - Установка зависимостей
    - Запуск development-версии
    - Запуск production-версии
4. [Ведение разработки](#code-of-conduct)
    - Git-регламент
    - Компоненты
    - Хранение статики
    - Импорты и алиасы
    - Стили
    - Redux
    - Качество кода

## <a name="inside">Что внутри?</a>
- [Next.js 9](https://nextjs.org/docs) в качестве платформы
- [SCSS](https://sass-lang.com/documentation)
- [PostCSS Autoprefixer](https://autoprefixer.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)
- [Сетка на основе Susy](https://www.oddbird.net/susy/docs/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/user-guide)
- [Prettier](https://prettier.io/) (не конфликтует с ESLint и Stylelint)
- [Jest](https://jestjs.io/) для тестов
- [Templateman](https://github.com/adlite/templateman) для быстрого создания повторяющихся компонентов
- Production-оптимизации: [CSSO](https://github.com/css/csso), [Imagemin](https://github.com/Klathmon/imagemin-webpack-plugin) и [SVGO](https://github.com/Klathmon/imagemin-webpack-plugin#optionssvgo)
- Webpack [file loaders](https://webpack.js.org/loaders/file-loader/)
- [ES7 декораторы](https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators)
- [Redux](https://redux.js.org/) (на основе [Ducks](https://github.com/erikras/ducks-modular-redux) паттерна)
- Базовые компоненты и компоненты высшего порядка (HOCs)
- Git-хуки с ESLint, Stylelint и Prettier правками

## <a name="get-started">Начало работы</a>
### Окружение
Разработка ведется в системах MacOS или Linux.
На Windows все команды следует выполнять в UNIX-подобной среде (WSL, Git Bash или Cygwin).

### Должны быть предустановлены
- Node.js v10.x.x+
- Npm v6.x.x+

### Установка зависимостей
Для инициализации проекта устанавливаем зависимости и копируем образец env-переменных:
1. `npm install`
2. `cp .env.example .env`

..или просто запускаем:
```
bash ./shell/init.sh
```

### Запуск development-версии
Для запуска Next development-сервера:
```
npm run dev
```
Затем переходим на `http://localhost:3000`.

Кастомный порт можно поставить в `.env` файле.

### Запуск production-версии
1. Собираем приложение с помощью `npm run build`
2. Запускаем сервер `npm run start`

### Деплой
Для деплоя изменений на сервере запускаем:
```
bash ./shell/deploy.sh
```

## <a name="code-of-conduct">Ведение разработки</a>
### Git-регламент
#### Создание репозитория
Для того, чтобы создать репозиторий на основе react-boilerplate:
1. Создаем группу по проекту в Gitlab (если еще не создана)
2. Форкаем данный репозиторий в эту группу
3. Переименовываем README, убрав из нее вступительную описательную часть, 
добавляем description в Gitlab, переименовываем package.json
4. Хлопаем в ладоши от первых головокружительных успехов!

#### Ветки
В проекте обязательно должны присутствовать 3 ветки:
1. `master` - релизные версии проекта (с тегами по номерам версий)
2. `stage` - ветка для презентации заказчику и его одобрения для последующего слияния в `master`
3. `dev` - ветка для деплоя на наш dev-сервер

Эти 3 основные ветки должны быть снабжены CI-пайплайнами для автоматического тестирования и деплоя на наши dev и stage-сервера.

Остальные же ветки используются для ведения отдельными разработчиками и в будущем будут использоваться для слияния в `dev`.

Для создания своей ветки руководствуемся следующими правилами:
1) Ответвляемся от актуальной ветки `dev`
2) Начинаем именование с названия своего аккаунта в Gitlab: `@username/..`
3) После слеша следует название типа действия, которые мы производим в данной ветке 
(`feature`, `hotfix`, `support`, `release`). Например: `@username/feature/..`
4) И описываем наконец сами действия, который мы производим в данной ветке (только буквы в нижнем регистре и дефис). Например: `@username/feature/responsive-header`
5) После внесения изменений делаем Merge Request в `dev`

Из этого следует, что порядок слияния следующий: 
```
@developer/type/action -> dev -> stage -> master
```

#### Коммиты
Все названия коммитов должны быть на английском языке и начинаться с большой буквы.
Если изменения коснулись только одного файла, следует вначале указать его название, например:
```
Button.js: Change text styles
```

Запрещено использовать необъективные названия коммитов в стиле `fix bugs`. 
Всегда начинай коммит с глагола (например: Add, Fix, Update, Remove, Rename, Delete и тд), 
либо с названия файла/папки, в котором велась работа. Затем идет субъект, над которым производилось действие и затем
указывается местоположение, где оно производилось.

То есть сообщение коммита должно примерно соответствовать следующему правилу:
```
{Place}: {action} + {subjects}
```
или:
```
{Action} + {subjects} in {place}
```

Например нам нужно изменить PropTypes в компоненте `/components/Button/Button.js`, тогда название коммита будет:
```
Button.js: fix propTypes
```
или:
```
Fix propTypes in Button.js
```

### Компоненты
#### Типы компонентов
По уровню уникальности компоненты можно разделить на 4 типа:
1. [Компоненты высшего порядка](https://reactjs.org/docs/higher-order-components.html) (Higher Order Components, HOCs, хоки или компоненты-усилители) - 
хранятся в `/hocs/`, созданы для добавления функционала в оборачиваемые компоненты, 
путем передачи им дополнительных пропсов. Используются всегда повторно и существуют только совместно 
с другими компонентами.
2. Reusable-компоненты - хранятся в `/components/` и предназначены для повторного использования 
во многих местах проекта.
3. Секции - части верстки, призванные собирать reusable-компоненты в композиции. 
Лежат в `/sections/`, должны заканчиваться словом `Section` (например `ContactsSection`), всегда уникальны в контексте проекта. 
4. [Страницы](https://nextjs.org/docs#dynamic-routing) - всегда уникальные компоненты в единственном экземпляре, соответствующие роутам приложения и 
состоящие из секций. Хранятся в `/pages/`.

#### Компоненты высшего порядка
Каждый компонент хранится в отдельном файле, все вместе они экспортируются из `index.js`. Пример:
```
./hocs
 ├─...
 ├─index.js
 ├─withReduxStore.js
 ├─withBreakpoints.js
 └─...
```

В будущем stateful-компоненты (классы) оборачиваются в виде ES7-декораторов, например:
```javascript
import {withBreakpoints} from 'hocs';

@withBreakpoints
class MyComponent extends React.PureComponent {}

export default MyComponent;
```

Stateless-компоненты (функции) в виде экспорта обернутых в функцию компонентов:
```javascript
import {withBreakpoints} from 'hocs';

const MyComponent = () => <div>MyComponent</div>;

export default withBreakpoints(MyComponent);
```

#### Reusable-компоненты
Каждый компонент должен находится в отдельной папке, в формате:
```
./ComponentName
 ├─index.js // Файл экспорта компонента
 ├─ComponentName.js // Файл самого компонента
 ├─InternalComponent.js // Если есть внутренний компонент, который используется только в контексте текущего
 └─style.scss // Файл стилей компонента
```

Файл экспорта оформляется в следующем виде:
```javascript
export {default} from './ComponentName';
```

#### Секции
Каждая секция представляет уникальный компонент, чаще всего состоящий из reusable-компонентов
из папки `/components/`. 

Структура должна повторять структуру `/pages/`, только вместо файлов страниц создаются их папки с компонентами секций внутри.
Например, у нас есть страница `/pages/about` с секциями `IntroSection`, `AboutSection`, `ContactsSection`.

Тогда страница `about.js` будет выглядить примерно так:
```javascript
// Vendor
import React from 'react';
import Head from 'next/head';
// Internals
import {IntroSection, AboutSection, ContactsSection} from 'sections/about';

const About = () => (
  <React.Fragment>
    <Head>
      <title>About page</title>
    </Head>
    <IntroSection />
    <AboutSection />
    <ContactsSection />
  </React.Fragment>
);

export default About;

```

A внутри `/sections/` будет следующая структура:
```
./sections
 ├─...
 ├─about/
 │ ├─index.js // Файл экспорта секций
 │ ├─IntroSection.js
 │ ├─AboutSection.js
 │ └─ContactsSection.js
 └─...
```

#### Страницы
Ссылки для ознакомления:
- [Quick start](https://nextjs.org/docs#quick-start)
- [Dynamic Routing](https://nextjs.org/docs#dynamic-routing)
- [Routing](https://nextjs.org/docs#routing)
- [Custom _app](https://nextjs.org/docs#routing)
- [Custom _document](https://nextjs.org/docs#custom-document)
- [Custom _error page](https://nextjs.orgdocs#custom-error-handling)

Каждая страница должна представлять собой простой компонент, внутри которого лежат уникальные секции страницы из папки `/sections/`.
По возможности стоит максимально избегать сложной логики внутри страниц и пытаться экстрактить их в отдельные утилиты и компоненты.

#### Создание компонентов
Для создания компонентов следует использовать CLI-утилиту [Templateman](https://www.npmjs.com/package/templateman),
с помощью которой можно удобно и быстро создавать компоненты из заранее сгенерированных шаблонов в папке `/templates/`.
Для ее использования после установки зависимостей вводим в консоли:
```
tm
```

После чего откроется меню выбора создаваемого компонента:
```
+------------------------+
> Hello, I'm Templateman <
+------------------------+
? Choose your template: (Use arrow keys)
> React Component Function
  React Component Class
  React Component Connected Class
  React Section
  React Page
  Redux Duck Module
  React Component Function (partial)
(Move up and down to reveal more choices)
```

С помощью стрелок выбираем необходимый пункт, вводим название и базовая структура компонента
автоматически встраивается в инфраструктуру проекта.

### Хранение статики
Для хранения статики доступной из корня сайта по URL после `/` используется папка `/public/`.
Здесь следует хранить к примеру: `favicon.ico`, `robots.txt`, `manifest.json` и остальные файлы для SEO, аналитики и прочие,
необходимые для доступа извне.

Подробнее можно почитать [здесь](https://nextjs.org/docs#static-file-serving-eg-images).

### Импорты и алиасы
#### Алиасы
Все пути внутри проекта снабжены [алиасами](https://webpack.js.org/configuration/resolve/#resolvealias) 
для  удобного импорта относительно корня проекта. При добавлении папки в корень проекта 
нужно добавить также ее алиас в `next.config.js` (ищем внутри `config.resolve.alias`) и `jest.config.js` (поле `moduleNameMapper`)
для тестирования без ошибок.

Например, чтобы импортировать утилитарную функцию из компонента мы пишем:
```
import {utilName} from 'utils';
```
вместо:
```
import {utilName} from '../../utils';
```

#### Экспортные файлы
Каждый корневой папке для удобства желательно добавлять `index.js` файл с экспортами всего содержимого. 
Чтобы в будущем в коде импортировать:
```
import {url} from 'utils';
``` 
вместо:
```
import url from 'utils/url';
```

### Стили
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

### Redux
В проекте используется паттерн "уточек" [Redux Ducks](https://github.com/erikras/ducks-modular-redux), где структура 
разделена не на редьюсеры, экшены и их типы, а на так называемые модули, каждый из которых объединяет в себе эти 3 сущности.

В качестве образца, есть пример с простым модулем инкремента `/store/modules/example.js`. 
Его можно брать за основу, либо создавать с помощью [Templateman](https://www.npmjs.com/package/templateman).

Структура:
```
./store
 ├─modules/
 │ ├─... // Прочие модули
 │ └─example.js // Пример модуля
 ├─index.js // Файл инициализации стора и миддлваров
 └─reducers.js // Файл с импортом всех редьюсеров
```

### Качество кода
#### Git-хуки
Каждый коммит запускает Git-hook, при котором код форматируется с помощью Prettier, анализируется с помощью ESLint и Stylelint,
и тестируется с помощью Jest. 

Если одна из проверок не будет пройдена, сделать коммит не получится. 

### Заповеди
1. Прояви милосердие для последующих поколений разработчиков, которые будут поддерживать проект.
Оставляй внятные комментарии в непонятных местах. Для комментирования методов и функций используй [JSDoc](https://jsdoc.app/).
Следи за документацией в README.md, если в проекте что-то глобально обновилось, обнови это и в документации.
2. Почитай про ["запахи кода"](https://refactoring.guru/ru/refactoring/smells), не дублируй, выноси сложную логику в отдельные
методы, функции и утилиты. Не переноси логику в верстку, используй относительные пути в ссылках.
3. Называй вещи своими именами, используй camelCase, не именуй переменные `var1`, `var2` или `doktorskayaKolbasa`. 
Названия методов должны соответствовать правилу verb + subjects, то есть всегда начинаться с глагола.
Например, это твой бро: `setColors(colors)`, а это нет: `colors(colors)`. 
Классы всегда называй с большой буквы, а если с API пришло поле объекта в snake_case, то бери его в квадратные скобки:
`data.posts['relative_posts']`.
