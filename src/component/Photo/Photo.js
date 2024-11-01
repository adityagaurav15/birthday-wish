import React from "react";
import "./Photo.css";
import lineTwo from "../../assets/smile.gif";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.jpeg";
import img11 from "../../assets/img11.jpeg";
import img12 from "../../assets/img12.jpeg";

const Test = () => {
  const firstLine = [img1, img2, img3, img4, img5, img6];
  const secondLine = [img7, img8, img9, img10, img11, img12];
  return (
    <div className="background-photo ">
      <div style={{ display: "flex" }}>
        {firstLine.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={lineTwo} width="100%" />
              </div>
              <div className="card-back">
                <img src={image} width="100%" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {secondLine.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={lineTwo} width="100%" />
              </div>
              <div className="card-back">
                <img src={image} width="100%" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
