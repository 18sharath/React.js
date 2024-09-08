import ShoppingListItem from "./ShoppingListitem";
export default function ({ item }) {
    return (
        <ul>
            {item.map((i) => (
                // <li
                // key={i.id}
                // style={{
                //     color:i.completed?"grey":"red",
                //     textDecoration:i.completed?"line-through":"none",
                // }}
                // > 

                //     {i.item} -{i.quantity}</li>
                <ShoppingListItem
                    key={i.id}
                    // item={i.item} 
                    // quantity={i.quantity} 
                    // completed={i.completed} 
                    // you can pass at a time also by using three dots 
                    {...i}
                    />
            )

            )}
        </ul>
    );
}