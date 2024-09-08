import ShoppingListItem from "./ShoppingListItem";
function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}// prop
          item={i.item}
          quantity={i.quantity}
          completed={i.completed}
        />
        // <ShoppingListItem key={i.id} {...i} />
      ))}
    </ul>
  );
}

export default ShoppingList;
