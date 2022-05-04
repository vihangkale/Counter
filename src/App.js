import './index.css';
import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <div>
          <button className="" onClick={(e)=> setCount(count-5) }>-5</button>
          <button className="m-l-10" onClick={(e)=> setCount(count-1) }>-</button>
          <button className="m-l-10" onClick={(e)=> setCount(0) }>Reset</button>
          <button className="m-l-10" onClick={(e)=> setCount(count+1) }>+</button>
          <button className="m-l-10" onClick={(e)=> setCount(count+5) }>+5</button>
      </div>
    </div>
  );
}

export default App;