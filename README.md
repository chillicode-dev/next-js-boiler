# Шаблон для быстрого старта на React
Лекарственное средство от головной боли при разработке
проектов на React + Next.js.

#### Форма выпуска, состав и упаковка
Каркас в виде готовой базовой структуры файлов, технологий и паттернов,
собранных в единый репозиторий для быстрого старта любого проекта на React внутри 
команды Chillicode.

#### Фармакологическое действие
- Оказывает анальгетическое, жаропонижающее и противовоспалительное действие на пятую точку девелопера
на этапе создания экосистемы проекта;
- Помогает справиться с посттравматическим и лихорадочным синдромом после поддержки легаси.

#### Показания к применению
- SPA-приложения (SSR присутствует)
- Сервисы и микросервисы
- Корпоративные сайты
- REST API / Headless CMS
- Интернет-магазины

#### Противопоказания
- Простые лендинги
- Сайты-презентации с большим количеством анимации и разношерстных компонентов

## Содержание
1. Что внутри?
2. Начало работы
    - Окружение
    - Установка зависимостей
    - Запуск development-версии
    - Запуск production-версии
    - Настройка IDE (дополнительно)
        - WebStorm
        - VS Code
3. Структура проекта
    - /assets/
    - /classes/
    - /components/
    - /hocs/
    - /pages/
    - /public/
    - /sections/
    - /store/
    - /styles/
    - /templates/
    - /tests/
    - /utils/
    - /webpack/
4. Ведение разработки
    - Git-регламент
    - Импорты и алиасы
    - Создание компонентов
    - Стили
    - Страницы
    - Redux
    - Тестирование

## Что внутри?
- Next.js 9 в качестве платформы
- SCSS
- PostCSS Autoprefixer and CSS Modules
- Сетка на основе Susy
- ESLint
- Stylelint
- Prettier (не конфликтует с ESLint и Stylelint)
- Jest для тестов
- Git-хуки с ESLint, Stylelint и Prettier правками
- Templateman для быстрого создания повторяющихся компонентов
- Production-оптимизации: CSSO, Imagemin и SVGO
- Webpack file loaders
- ES7 декораторы
- Redux (на основе Ducks паттерна)
- Базовые компоненты и компоненты высшего порядка (HOCs)

## Начало работы
### Окружение
Разработка ведется в системах MacOS или Linux.
На Windows все команды следует выполнять в UNIX-подобной среде (WSL, Git Bash или Cygwin).

### Установка зависимостей
Для инициализации проекта устанавливаем зависимости и копируем образец env-переменных:
1. `npm install`
2. `cp .env.example .env`

### Запуск development-версии
Для запуска Next development-сервера:
```
npm run dev
```
Затем переходим на `http://localhost:3000`.

Для изменения порта можно указать:
```
npm run dev -- -p <your port here>
```

### Запуск production-версии
1. Собираем приложение с помощью `npm run build`
2. Запускаем сервер `npm run start`

### Настройка IDE (дополнительно)
#### WebStorm
В процессе написания ✏

#### VS Code
В процессе написания ✏


## Структура проекта
### Общие положения
1. Все пути внутри приложения снабжены [алиасами](https://webpack.js.org/configuration/resolve/#resolvealias) 
для  удобного отображения относительно корня проекта. При добавлении папки в корень проекта 
следует добавить также ее алиас в `next.config.js` (ищем внутри `config.resolve.alias`).
2. Каждый корневой папке для удобства желательно добавлять `index.js` файл с экспортами всего содержимого. 
К примеру, чтобы в будущем в коде импортировать `import {url} from 'utils';` вместо `import url from 'utils/url';`.

### /assets/
Папка для хранения ассетов приложения (изображения, иконки, шрифты, видео, документы и прочие файлы), 
которые импортируются в JS и SCSS-код с помощью Webpack.
#### Импорт файлов в код
Импорт файлов в проект производится с помощью Webpack [file-loader](https://www.npmjs.com/package/file-loader) и распространяется на файлы 
с расширениями eot, woff, woff2, ttf, svg, png, jpg, jpeg, gif. Добавить типы файлов можно в `next.config.js`.

Пример (JS):
```javascript
import logoImg from 'assets/img/logo.png';

const logo = <img src={logoImg} alt="Logo" />;
```

Пример (SCSS):
```scss
.logo {
  background-image: url('assets/img/logo.png');
}
```
#### Импорт SVG-иконок
Импортировать иконки можно напрямую в качестве React-компонента с помощью [react-svg-loader](https://www.npmjs.com/package/react-svg-loader). 
SVG-код в таком случае будет встраиваться инлайново, благодаря чему на него можно влиять с помощью CSS.

Это правило распространяется только на иконки, лежащие в папке `/assets/icons/`. 
Если есть необходимость импортировать иконки в качестве ссылок, их нужно хранить в другой директории внутри `/assets/`.

Пример:
```javascript
import LoaderIcon from 'assets/icons/loader.svg';

const loader = <LoaderIcon width={48} height={48} />;
```

### /classes/
В этой директории хранятся вспомогательные классы для работы внутри приложения.
К примеру, мы можем создать класс-обертку `Api` для работы с REST API приложения.

Обращаем внимание, что здесь хранятся только файлы реализации классов, а не их экземпляры.

### /components/
Здесь хранятся reusable React-компоненты. 
Каждый компонент должен находится в отдельной папке, в формате:
```
./ComponentName
 ├─index.js // Файл экспорта компонента
 ├─ComponentName.js // Файл самого компонента
 ├─ComponentName.test.js // Файл тестов
 ├─InternalComponent.js // Если есть внутренний компонент, который используется только в контексте текущего
 ├─InternalComponent.test.js // Тесты внутреннего компонента
 └─style.scss // Файл стилей компонента
```

После прогона снэпшот-тестами также сгенерируется папка `__snapshots__` со снимками:
```
./ComponentName
 ├─...
 ├─__snapshots__/
 │ └─ComponentName.test.js.snap
 └─...
```

Файл экспорта оформляется в следующем виде:
```javascript
export {default} from './ComponentName';
```

Дабы не создавать каждый раз такую структуру руками, можно использовать cli-утилиту [Templateman](https://www.npmjs.com/package/templateman),
которая сама создает базовую структуру для каждого компонента.

### /hocs/
Папка с [компонентами высшего порядка](https://reactjs.org/docs/higher-order-components.html).

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

### /pages/
Папка со страницами сайта Next.js.

Ссылки для ознакомления:
- [Quick start](https://nextjs.org/docs#quick-start)
- [Dynamic Routing](https://nextjs.org/docs#dynamic-routing)
- [Routing](https://nextjs.org/docs#routing)
- [Custom _app](https://nextjs.org/docs#routing)
- [Custom _document](https://nextjs.org/docs#custom-document)
- [Custom _error page](https://nextjs.orgdocs#custom-error-handling)

Каждая страница должна представлять собой простой компонент, внутри которого лежат уникальные секции страницы из папки `/sections/`.
По возможности стоит максимально избегать сложной логики внутри страниц и пытаться экстрактить их в отдельные утилиты и компоненты.

### /public/
Папка для хранения статики и доступных из корня сайта файлов по URL после `/`.
Здесь следует хранить к примеру `favicon.ico`, `robots.txt`, `manifest.json` и прочие SEO-файлы.

Подробнее можно почитать [здесь](https://nextjs.org/docs#static-file-serving-eg-images).

### /sections/
Папка секций на страницах с уникальным контентом/дизайном. 
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

### /store/
В этом святом месте хранится все, что касается Redux.
В приложении используется паттерн "уточек" [Redux Ducks](https://github.com/erikras/ducks-modular-redux), в котором структура состояния 
делится не на редьюсеры, экшены и их типы, а на так называемые модули, где каждый модуль объединяет в себе эти 3 сущности.

В качестве образца, есть пример с простым модулем инкремента `/store/modules/example.js`. Его можно брать за основу создания модуля.
Либо создавать модуль через [Templateman](https://www.npmjs.com/package/templateman).

Структура:
```
./store
 ├─modules/
 │ ├─... // Прочие модули
 │ └─example.js // Пример модуля
 ├─index.js // Файл инициализации стора и миддлваров
 └─reducers.js // Файл с импортом всех редьюсеров
```

### /styles/
В процессе написания ✏

### /templates/
Папка шаблонов для [Templateman](https://www.npmjs.com/package/templateman).

### /tests/
Здесь хранится все, что касается помощи в тестировании: моки, фикстуры, утилиты и тд.

### /utils/
Папка с небольшими утилитарными функциями. Желательно делить их модульно по смыслу. 
Например, все что касается работы с URL хранить в модуле `/utils/url.js` и экспортировать в `/utils/index.js`.

Уникальные утилиты с разным назначением желательно сложить в модуль `/utils/misc.js`.

Структура:
```
./utils
 ├─index.js // Единый файл экспорта
 ├─hocs.js // Утилиты работы с Higher Order Components
 ├─env.js // Утилиты работы с окружением
 ├─url.js // Утилиты работы с url
 └─... // Прочие утилиты
```

### /webpack/
Здесь хранятся все конфиги, скрипты и утилиты, исполняемые в билдтайме.
    
## Ведение разработки
### Git-регламент
В процессе написания ✏

### Импорты и алиасы
В процессе написания ✏

### Создание компонентов
В процессе написания ✏

### Стили
В процессе написания ✏

### Страницы
В процессе написания ✏

### Redux
В процессе написания ✏

### Тестирование
В процессе написания ✏
