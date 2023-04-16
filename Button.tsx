import * as React from 'react';
import './style.css';

export default function Button(value) {
  const [numState, setNumState] = React.useState(0);
  const [num2State, dispatch] = React.useReducer(
    (prev, action: { type: string }) => {
      console.log(prev, action);
      if (action.type == '+') {
        return ++prev;
      } else if (action.type == '-') {
        return --prev;
      }
    },
    0
  );

  const buttonEvent = (value: string) => {
    console.log('ccc:', value);
    setNumState(numState + 1);
  };

  const handleButtonEvent1 = () => {
    dispatch({type:'+'});
  };
  const handleButtonEvent2 = () => {
    dispatch({type:'-'});
  };

  return (
    <div>
      <h2>Num: {numState}</h2>
      <h2>Num2: {num2State}</h2>
      <input
        type="button"
        value="State up"
        onClick={() => buttonEvent('渡したい値')}
      />
      <br />
      <input
        type="button"
        value="count up"
        onClick={() => handleButtonEvent1()}
      />
      <input
        type="button"
        value="count down"
        onClick={() => handleButtonEvent2()}
      />
    </div>
  );
}
