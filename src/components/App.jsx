import { useState } from "react";
import Heading from "./Heading";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card.jsx";
import Entry from "./Entry.jsx";
import animals from "../database/data.js";
import cars from "../database/practice.js";
import ToDoItem from "./ToDoItem.jsx";
function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newVal = e.target.value;
    setInput(newVal);
  }

  function addItem() {
    setItems([...items, input]);
    setInput("");
  }

  function deleteItem(id) {
    setItems();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, i) => (
            <ToDoItem key={i} id={i} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
