import React from "react";
import ReactDOM from "react-dom";
const headcolor = {
  color: "Red"
};
var greeting;
const date = new Date();
const hour = date.getHours();
if (hour < 12) {
  greeting = "Good morning";
  headcolor.color = "Red";
} else if (hour > 12 && hour < 18) {
  greeting = "Good afternoon";
  headcolor.color = "Green";
} else if (hour > 18 && hour < 24) {
  greeting = "Good evening";
  headcolor.color = "Blue";
}

ReactDOM.render(
  <h1 style={headcolor}> {greeting} </h1>,
  document.getElementById("root")
);
