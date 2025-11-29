import { useState } from 'react'

import UserContextProvider from './context/userContextProvider'

import './App.css'
import { Login } from './Components/Login'
import { Profile } from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
       <h2 className='text-white text-center font-medium text-xl'>My React App with Context Api</h2>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
