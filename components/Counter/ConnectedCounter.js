// Vendor
import {useDispatch, useSelector} from 'react-redux';
// Internals
import {decrementCount, incrementCount, resetCount} from 'store/modules/example';
import Counter from './Counter';

function ConnectedCounter() {
  const count = useSelector(state => state.example.count);
  const dispatch = useDispatch();

  return (
    <Counter
      count={count}
      onIncrement={() => dispatch(incrementCount())}
      onDecrement={() => dispatch(decrementCount())}
      onReset={() => dispatch(resetCount())}
    />
  );
}

export default ConnectedCounter;
