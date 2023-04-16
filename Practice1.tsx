import * as React from 'react';
import { act } from 'react-dom/test-utils';
import './style.css';

const reducer = (
  state: stateType,
  action: {
    // ここで指定した型が、dispatchの時に利用される型になる
    type: string;
    payload: { name: string; value: number };
  }
): stateType => {
  console.log('type:', action.type, ' name:', action.payload.name);
  let result = 0;
  if (action.type == 'change') {
    console.log('change');
    if (action.payload.name == 'a') {
      return { ...state, a: action.payload.value };
    } else if (action.payload.name == 'b') {
      return { ...state, b: action.payload.value };
    }
  } else if (action.type == 'add') {
    result = state.a + state.b;
  } else if (action.type == 'minus') {
    result = state.a - state.b;
  } else if (action.type == 'multiply') {
    result = state.a * state.b;
  } else {
    console.log('else🐳');
    result = 0;
  }
  return { ...state, result: result };
};

type stateType = { a: number; b: number; result: number };
const CALC_OPTIONS = ['-', 'add', 'minus', 'multiply'];

export default function Practice1(value) {
  const initState: stateType = { a: 1, b: 2, result: 3 };
  const [result, dispatch] = React.useReducer(reducer, initState);

  const handleCalcOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('🤩', e.target.value);
    dispatch({ type: e.target.value, payload: { name: 'xxx', value: 222 } });
  };

  const numChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);
    if (e.target.name == 'a') {
      console.log('this is A');
      dispatch({
        type: 'change',
        payload: { name: e.target.name, value: parseInt(e.target.value) },
      });
    } else if (e.target.name == 'b') {
      console.log('this is B');
      dispatch({
        type: 'change',
        payload: { name: e.target.name, value: parseInt(e.target.value) },
      });
    }
  };

  return (
    <div>
      a:
      <input
        name="a"
        type="number"
        value={result.a}
        onChange={numChangeHandler}
      />
      <br />
      b:
      <input
        name="b"
        type="number"
        value={result.b}
        onChange={numChangeHandler}
      />
      <br />
      <select value="calc" onChange={handleCalcOption}>
        {CALC_OPTIONS.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
      <br />
      結果：{result.result}
    </div>
  );
}
