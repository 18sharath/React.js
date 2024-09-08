import { useState } from "react";

export default function()
{
    const [firstname,setfirstname]=useState("");
    const [lname,setlname]=useState("");
    const updatefname=(evt)=>{
        setfirstname(evt.target.value);
    }
    const updatelname=(evt)=>{
        setlname(evt.target.value);
    }
    return<>
    <label htmlFor="fname" >Enter a first name</label>
    <input type="text" id="fname" placeholder="enter a firstname" value={firstname} onChange={updatefname}></input>
    {/* <button >Submit</button> */}
    <label htmlFor="lname" >Enter a first name</label>
    <input type="text" id="lname" placeholder="enter a lastname" value={lname} onChange={updatelname}></input>
    <button >Submit</button>
    </>
}