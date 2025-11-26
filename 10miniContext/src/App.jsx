import { useState } from 'react'
import UserContextProvider from './context/userContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import './App.css'


function App() {
 

  return (
    <UserContextProvider>
      <h2>React with Chai</h2>
      <Login />
      <Profile />
      {/* whatever components we will write here we'll get access of global variable = context */}
    </UserContextProvider>

  )
}

export default App
