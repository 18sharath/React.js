import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cilcker from './Cilcker'
import Form from './Form'
function App() {
  
  return (
    <>
    <Form/>
      <Cilcker message="dont click me" />
    </>
  )
}

export default App
