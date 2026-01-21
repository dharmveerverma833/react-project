import React, { useState } from 'react'

function Counter() {
const [count, setCount] = useState(0);
 let incCount = ()=>{
    // setCount( count+1);
    

    setCount((currCount) =>{
      return currCount +1;
      
    })
    setCount((currCount) =>{
      return currCount +1;
    })
    console.log("render")
 }

  return (
    <div>
        <h3>count = {count}</h3>
        <button onClick={incCount}>Submit</button>
    </div>
    
  )
}

export default Counter;