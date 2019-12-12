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