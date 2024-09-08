// import { useState } from 'react'

// import './App.css'
// import Checken  from './Checken';
// import Greeting from './Greeting';
// import Color from './Color';
// import Solts from './Slots';
import Shoppinglist from "./Shoppinglist";
const data = [
  { item: "egg", quantity: "1", completed: false },
  { item: "chiken", quantity: 2, completed: false },
  { item: "milk", quantity: 4, completed: true },
  { item: "carrots", quantity: 6, completed: true },
];
function App() {
  return (
    <div>
      <Shoppinglist items={data} />
    </div>
  );
}

export default App;
