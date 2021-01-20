// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './style.module.scss';

function Counter({className, count, onIncrement, onDecrement, onReset}) {
  return (
    <div className={cn(style.Counter, className)}>
      <p>Redux counter: {count}</p>
      <button onClick={onIncrement}>Increment +</button>
      <button onClick={onDecrement}>Decrement -</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

Counter.defaultProps = {
  className: '',
  onIncrement: () => null,
  onDecrement: () => null,
  onReset: () => null,
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  className: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func,
};

export default Counter;
