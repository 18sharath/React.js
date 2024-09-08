import { useEffect } from "react";
import { useState } from "react";
export default function CCount(){
    const [count , setcount]=useState(0);
    const [name, setname]=useState("");
    useEffect (function myEffect(){
        console.log("my effects");
    } ,[count]); // to only run when count is increase
    const increament=()=>{
        setcount((c)=>c+1);
    }
    const handlechange =(e)=>{
        setname(e.target.value);
    }

    return <>
    <h1>{count}</h1>

    <button onClick={increament} >+1</button>

    <h1>{name}</h1>
    <input type="text" value={name} onChange={handlechange}></input>

    </>
}