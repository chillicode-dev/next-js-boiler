### /components/
Здесь находятся reusable React-компоненты. 
Каждый компонент должен храниться в отдельной папке в формате:
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
