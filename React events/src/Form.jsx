
function fun(evt)
{
    evt.preventDefault(); // this is the function to prevent default behaviour evt or e
    console.log("submitted");
}
export default function()
{
    return(
        <form>
            {/* we dont want to refresh whole page so thats why we using vents object */}
            <button onClick={fun}>submit</button>  
        </form>
            
       
    )
}