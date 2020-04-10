import React from "react";
import ReactDOM from "react-dom";

const headcolor = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
headcolor.color = "green";
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMIarETVRyn7MITVFuxqkbDBp1ykjs4PrH6bFDg48tYIZq-XTf&usqp=CAU";
ReactDOM.render(
  <div>
    <h1 style={headcolor}> My favourite indian food </h1>
    <div>
      <img className="food-img" src={img1} alt="Idli" />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_FeNHjZ0C05WHVIvlOfNR_cE2zKcBdP55rA8VzkLHfT9XlSlC&usqp=CAU"
        alt="sweet"
      />
    </div>
  </div>,
  document.getElementById("root")
);
