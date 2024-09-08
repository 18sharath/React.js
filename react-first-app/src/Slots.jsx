export default function Slots({val1, val2,val3})
{
 const iswinner=val1===val2&&val1===val3;

  return (
    <div>
    <h1 style={{color:iswinner?"green":"red"}}>{iswinner?"you Win" :"you lose"}</h1>  
    </div>
  );
}