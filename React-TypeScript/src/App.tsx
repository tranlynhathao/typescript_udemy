import { useState } from "react";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";
import { v4 as getId } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const AddItem = (product: string, quantity: number) => {
    console.log("MADE IT TO THE APP COMPONENT");
    setItems([...items, { id: getId(), product, quantity }]);
  };

  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken", quantity: 2 },
  // ];

  return (
    <>
      <h1>Astronaut Status</h1>
      <Greeter person="Fred" />
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={AddItem} />
    </>
  );
}

export default App;
