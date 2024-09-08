import { useState } from 'react'

import './App.css'
import Checken  from './Checken';
import Greeting from './Greeting';
import Color from './Color';
// import Solts from './Slots';
import Shoppinglist from './Shoppinglist';
import Rentalproperties from './Rentalproperties';
const data=[
  {id:1,item:"egg",quantity:1,completed:false},
  {id:2,item:"chiken",quantity:2,completed:false},
  {id:3,item:"milk",quantity:4,completed:true},
  {id:4,item:"carrots",quantity:6,completed:true},
]
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
function App() {

  
  return (
    <>
    <Rentalproperties item={properties}/>
    {/* <Shoppinglist item={data}/> 
     <Slots val1="a" val2="bbb" val3="mm" /> 
    <Checken num1={10} num2={20}/>
    <Color color={['red','green','blue']}/>
    <Greeting array={[1,2,3,4]}/> 
    <Greeting name="bharathhhh" from="thammadikoppa"/>  */}
    </>
    
  )
}

export default App
