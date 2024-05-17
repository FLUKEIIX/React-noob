import { useState } from "react";
import Heading from "./Heading";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card.jsx";
import Entry from "./Entry.jsx";
import animals from "../database/data.js";
import cars from "../database/practice.js";

// console.log(cars);

var [honda, tesla] = cars;

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

// console.log(coloursByPopularity);

// console.log(honda.model);

function App() {
  const time = new Date().toLocaleTimeString("it-IT");
  const [clock, setTime] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    setTime(newTime);
    // console.log("getTime");
  }

  // setInterval(getTime, 1000);

  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
