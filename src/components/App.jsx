import { useState } from "react";
import Heading from "./Heading";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card.jsx";
import Entry from "./Entry.jsx";
import animals from "../database/data.js";
import cars from "../database/practice.js";

function App() {
  const [name, setName] = useState("");
  const [headText, setHeadText] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setHeadText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headText}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
