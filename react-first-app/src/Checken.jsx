export default function Checken({num1,num2})
{
    const msg=num1===num2?"you won":"you lose"; // condional operator
    const stylee={color: num1===num2?"green":"red"}
    return <h1 style={stylee}>hello India {msg} </h1>
}