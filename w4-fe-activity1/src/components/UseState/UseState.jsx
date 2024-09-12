import { useState } from 'react';
import './UseState.css';


const UseState = () => {
  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }


  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick ={toggleTheme} >Toggle Theme</button>
      <h2>{count}</h2>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
