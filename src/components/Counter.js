import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/index';
const Counter = () => {
  const dispatch=useDispatch();

  const counter=useSelector(state=> state.counter.counter);
  
  const show=useSelector(state=>state.counter.showCounter);
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const incrementBy2Handler=()=>{
    dispatch(counterActions.increse(2))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show&& <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementBy2Handler}>incrementBy2</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
