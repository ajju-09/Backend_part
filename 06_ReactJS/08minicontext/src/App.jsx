import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'


function App() {
 

  return (
    <UserContextProvider>
     <h1>React mini Context</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
