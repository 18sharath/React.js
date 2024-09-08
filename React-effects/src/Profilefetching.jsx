import { useState } from "react";

export default function Profilefetching({search}){
    const [term, setterm]=useState("");
    function handlechange(evt){
        setterm(evt.target.value);
    }
    function handlesubmit(evt){
        evt.preventDefault();
        search(term);
        setterm("");
}
    return<>
    <form onSubmit={handlesubmit}>
        <input value={term} onChange={handlechange}></input>
        <button >SEARCH!!!</button>
    </form>
    </>

}