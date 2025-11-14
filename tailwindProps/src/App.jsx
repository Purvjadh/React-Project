import { useState } from 'react'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObject={
    product1:{
      productName:'Shampoo',
      price:20
    },

    product2:{
      productName:'Soap',
      price:45
    },

     product3:{
      productName:'Toothbrush',
      price:60
    }

    
  }

  let myArray=[1,2,3,3,4]

  let langName='Javascript'

  return (
    
    <>
      <h1 className='bg-slate-400 text-slate-700 font-bold p-6 text-center text-3xl '>Tailwind Test </h1>
      <Card name='user1' object={myObject.product1.productName} Array={myArray}/>
      <Card name='user2' object={myObject.product2.productName}/>
      <Card name='user3' />
    </>
  )
}

export default App
