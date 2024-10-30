// Card.js
import React from "react";
import "./test.css";

const Test = ({ message, content }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">card 1</div>
        <div className="card-back">message</div>
      </div>
    </div>
  );
};

export default Test;
