import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function addValue(){
    setCounter((prevCounter)=>(prevCounter+1))//prevCounter holds value of previous state 
    //to pass the the previous state value here we use callback
    setCounter((prevCounter)=>(prevCounter+1))
    setCounter((prevCounter)=>(prevCounter+1))
    setCounter((prevCounter)=>(prevCounter+1))
  }

  function decreaseValue(){
    setCounter(counter-1)
  }

  
  return (
    <>
     <h1>Counter = { counter}</h1>
     <button onClick={addValue}>Add Value</button>
     <br />
     <br />
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
