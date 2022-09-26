import React, {useState} from 'react'

function CounterTwo() {
    const initialcount = 0
    const [count ,setCount] = useState(initialcount)
    const incrementfive = ()=>{
        for(let i=0; i<5;i++){
            setCount(prevCount => prevCount +1)
        }
    }
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(initialcount)}>Reset</button>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count -1)}>Decrement</button >
      <button onClick={incrementfive}>increment5</button>
    </div>
  )
}

export default CounterTwo
