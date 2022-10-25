import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementBy, increment, incrementByAmount } from "./redux/reducers/counter";
function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="justify-center items-center text-center pt-20">
    <h1 className="mb-10"> The count is: {count}</h1>
    <button className="p-2 bg-green-500 " onClick={() => dispatch(increment())}>increment</button>
    <button className="p-2 mx-10 bg-red-500" onClick={() => dispatch(decrement())}>decrement</button>
    <button className="p-2 bg-green-500" onClick={() => dispatch(incrementByAmount(33))}>
      Increment by 33
    </button>
    <button className="p-2 mx-10 bg-green-500" onClick={() => dispatch(decrementBy(33))}>
    decrement by 33
    </button>
  </div>
  );
}

export default App;
