import React from "react";


function Heading() {
  const curTime = new Date().getHours();
  let time = "";

  const customStyles = {
    color: "",
  };

  if (curTime < 12 && curTime > 0) {
    customStyles.color = "red";
    time = "morning";
  } else if (curTime >= 12 && curTime <= 18) {
    customStyles.color = "green";
    time = "afternoon";
  } else {
    customStyles.color = "blue";
    time = "evening";
  }
  return (
    <div>
      <h1 style={customStyles} className="heading">
        Good {time}
      </h1>
      <ul>
        <li>{math.add(1,2)}</li>
        <li>{math.multiply(2,3)}</li>
        <li>{math.subtract(7,2)}</li>
        <li>{math.divide(5,2)}</li>
      </ul>
    </div>
  );
}

export default Heading;
