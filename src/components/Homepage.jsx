import { useState } from "react";
import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function Homepage() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default Homepage;
