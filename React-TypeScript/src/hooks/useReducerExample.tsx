import React, { useReducer } from 'react';

//đn state và action cho reducer
interface CounterState {
  count: number;
}

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

const initialState: CounterState = { count: 0 };

const reducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default UseReducerExample;
