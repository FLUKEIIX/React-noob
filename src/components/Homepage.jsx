import { useState } from "react";
import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function Homepage() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default Homepage;
