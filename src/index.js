import React from "react";
import ReactDOM from "react-dom";
const name = "manoj";
const currentdate = new Date();
// const year = currentdate.getFullYear()
ReactDOM.render(
  <div>
    <p> Created By {name} </p>
    <p> Copyright Current year {currentdate.getFullYear()} </p>
  </div>,
  document.getElementById("root")
);
