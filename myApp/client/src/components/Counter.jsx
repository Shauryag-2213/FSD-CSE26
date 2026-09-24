import React from 'react'
import { useState } from 'react';
const Counter = () => {
    let [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);
        console.log(count +1);
    }
    let decrement = () =>{
        setCount(count-1);
        console.log(count - 1);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <button onClick={decrement}>-</button><br></br>
        <span>{count}</span><br></br>
        <button onClick={increment}>+</button>      
    </div>
  )
}

export default Counter
