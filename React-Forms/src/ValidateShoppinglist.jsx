import {useState} from 'react'
export default function ValidateShoppinglist({additem})
{
    const [formData ,setformdata]=useState({product:"", quantity:0});
    const [productvalid,setproductvalid]=useState(true);
    const handlechange=(evt)=>{
        const modified_field=evt.target.name;
        const newval=evt.target.value;
        setformdata((newdata)=>{
            newdata[modified_field]=newval;
            return {...newdata};
        })
    }

    function validate(){
        if(formData.product.length===0)
            setproductvalid(false);
        else
        setproductvalid(true);
    }
    const handlesubmit=(e)=>{
        // if(e.target.value==="product")
        // validate(e.target.value);
        e.preventDefault(); // to prevent default sudden display
        console.log("asdas");
        additem(formData);
        setformdata({product:"",quantity:0});

    }
    return(
        <form onSubmit={handlesubmit}>
            {/* <h1>product is:{formData.product} quantity is :{formData.quantity}</h1> */}
            <label htmlFor='product'>Name of product</label>
            <input type='text' 
            placeholder="product name"
            name='product'
            id='product'
            onChange={handlechange}
            />
     {!productvalid && <p1 style={{color:"red"}}> product name cannot be empty</p1>}
<label htmlFor='quantity'>number  of product</label>
            <input type='number' 
            placeholder="quantity"
            name='quantity'
            id='quantity'
            onChange={handlechange}
            />
        <button disabled={!validate}> submit </button>
        </form>
    )
}