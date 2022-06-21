import React from "react";
import { useState } from "react";
import "./Temperature.css";

// 80+	Red
// 70-79	Orange
// 60-69	Yellow
// 50-59	Green
// 49 or below	Teal

const Temperature = (props) => {
  const [temp, setTemp] = useState(50);

  const handleDecrease = () => {
    setTemp(temp - 1);
  };
  const handleIncrease = () => {
    setTemp(temp + 1);
  };

  let tempColor;
  if (temp >= 80) {
    tempColor = "red";
  } else if (temp >= 70 && temp < 80) {
    tempColor = "orange";
  } else if (temp >= 60 && temp < 70) {
    tempColor = "yellow";
  } else if (temp >= 50 && temp < 60) {
    tempColor = "green";
  } else {
    tempColor = "teal";
  }

  return (
    <div>
      <p className={tempColor}> {temp} </p>
      <button onClick={handleIncrease}>Whew... It's HOT! Increase Temp</button>
      <button onClick={handleDecrease}>Brrr.. It's COLD! Decrease Temp </button>
    </div>
  );
};

export default Temperature;
