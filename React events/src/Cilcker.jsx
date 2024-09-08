function fun()
{
    console.log('you clicked');
}
export default function({message})
{
    return (
        <div>
            <h1> click on the below button</h1>
            {/* using arrow function */}
            <button onClick={()=>alert(message)}>CLICK ME</button> 
            <button onMouseOver={fun}>on mouse hover ME</button>
        </div>
    );

    
}