import { useState } from "react"

export default function()
{
    const [Username,setUsername]=useState("sharath");
    const updateusername=(evt)=>{
        console.log("changed");
        console.log(evt.target.value);
    }
     
    return <>
    <label htmlFor="sss">enter a name</label>
    <input  id="sss" type="text" placeholder="username" value={Username} onChange={updateusername}></input>
    <button>Submit</button>
    </>
}