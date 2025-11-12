//import React,{ useState,useEffect } from 'react'
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter,setCounter]=useState(0)
  
  //let counter=20

 function addValue(){
  console.log('value addded',counter)
  //counter=counter+1
  setCounter(counter+1)
 }

 function removeValue(){
  setCounter(counter-1)
 }

  return (
    <>
     <h1>Chai with Coffee</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove value</button>
     <p> Value={counter}</p>
    </>
  )
}

export default App
