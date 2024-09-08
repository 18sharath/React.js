export default function Color({color})
{
    return( 
    <div>
        <p>color List</p>
        <ul>
        {color.map((c)=> (
            <li style={{color:c}}>   {c}  </li>
            ))}
        </ul>
    </div>
    );
}