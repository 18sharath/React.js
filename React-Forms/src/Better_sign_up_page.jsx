import { useState } from "react";

export default function () {
    const [formdata, setformdata] = useState({ fname: "", lname: "" });
    const handlechange = (evt) => {
        const changedfield = evt.target.name;
        const newvalue = evt.target.value;
        setformdata((currdata) => {
            // currdata[changedfield] = newvalue;
            // return { ...currdata };
            return {
                ...currdata,
                [changedfield]: newvalue,
              };
        })

    }
    const handlesubmit = () => {
        console.log(formdata);
    }

    return <>
        <label htmlFor="fname" >Enter a first name</label>
        <input 
        type="text" 
        id="fname" 
        placeholder="enter a firstname"
        value={formdata.fname} 
        onChange={handlechange}
        name="fname"
        />
        {/* <button >Submit</button> */}
        <label htmlFor="lname" >Enter a first name</label>
        <input 
        type="text" 
        id="lname" 
        placeholder="enter a lastname"
        value={formdata.lname} 
        onChange={handlechange}
        name='lname'
        ></input>
        <button onClick={handlesubmit}>Submit</button>
    </>
}