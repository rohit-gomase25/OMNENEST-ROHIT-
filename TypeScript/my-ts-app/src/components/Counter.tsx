import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("Ready!");

  // 1. Increment Function
  const increment = () => {
    setCount(count + 1);
    setText("Increased!");
  };

  // 2. Decrement Function
  const decrement = () => {
    setCount(count - 1);
    setText("Decreased!");
  };

  // 3. Reset Function
  const reset = () => {
    setCount(0);
    setText("Reset!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter: {count}</h1>
      <p>Status: <strong>{text}</strong></p>

      {/* Using the functions in onClick */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;