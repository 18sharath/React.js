export default function ShoppingListItem({item,quantity,completed})
{
    const aab= { color:completed?"grey":"red",
                 textDecoration:completed?"line-through":"none"
               };

    return          <li style={aab}>  {item}-{quantity} </li>
        
}