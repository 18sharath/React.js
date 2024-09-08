import { useState } from "react";
import {v4 as uuid } from 'uuid';
// import Shoppinglistform from "./Shoppinglistform";
import ValidateShoppinglist from "./ValidateShoppinglist";
export default function List(){
const [items,setitems]=useState([
    { id:uuid(),product:"watch", quantity:10},
    { id:uuid(),product:"TV", quantity:20},
]);
const additem=()=>{
    setitems((newitem)=>{
        return [...newitem ,{...items, id:uuid()}];
    })
}

return <>
<h2>items:List</h2>
{ items.map((i)=>( 
    // when u use curly braces you return explicity 
    <li key={i.id}> {i.product} -{i.quantity}</li>
))}

<ValidateShoppinglist additem={additem}/>
</>
}