import { useState } from "react";
import Heading from "./Heading";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card.jsx";
import Entry from "./Entry.jsx";
import emojipedia from "../database/emojipedia.js";
import notes from "../database/notes.js";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <Header />
      {notes.map((note) => (
        <Note 
        key={note.key}
        title={note.title}
        description={note.content}
        />
      ))}
     <Footer />
    </div>
  );
}

export default App;
