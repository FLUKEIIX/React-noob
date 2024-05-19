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
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  }

  return (
    <div className="container">
      <h1>Hello {contact.fName + " " + contact.lName}</h1>
      <p>{contact.email}</p>
      <input
        onChange={handleChange}
        name="fName"
        type="text"
        placeholder="What's your Firstname?"
      />
      <input
        onChange={handleChange}
        name="lName"
        type="text"
        placeholder="What's your Lastname?"
      />
      <input
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="What's your Email?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
