import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import count from './Count'
// import Count from './Count'
import CCount from './CCount'
import QouteFecture from './QouteFecture'
import Profilefetching from './Profilefetching'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <CCount/> */}
  {/* <QouteFecture/> */}
  <Profilefetching />
      </>
  )
}

export default App
