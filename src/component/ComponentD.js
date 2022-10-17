import React,{useContext} from 'react'

import{countcontext} from '../App'

function ComponentD() {
  
  const CountContext = useContext(countcontext)
  return(
    <div>
      ComponentD -{CountContext.countState}
      <button onClick={()=>CountContext.countdispatch('increment')}>Increment</button>
      <button onClick={()=>CountContext.countdispatch('decrement')}>Decrement</button>
      <button onClick={()=>CountContext.countdispatch('reset')}>Reset</button>
    </div>
  )
  
}

export default ComponentD
