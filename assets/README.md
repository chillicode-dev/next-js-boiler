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
SVG-код в таком случае будет встраиваться в верстку в виде `<svg>` элемента, благодаря чему на него можно влиять с помощью CSS.

Это правило распространяется только на иконки, лежащие в папке `/assets/icons/`. 
Если есть необходимость импортировать иконки в качестве ссылок на изображение, их нужно хранить в другой директории внутри `/assets/`.

Пример:
```javascript
import LoaderIcon from 'assets/icons/loader.svg';

const loader = <LoaderIcon width={48} height={48} />;
```