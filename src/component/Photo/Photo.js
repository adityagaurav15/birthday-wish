// Card.js
import React from "react";
import "./Photo.css";
import imageCard from "../../assets/birthdayInner.jpeg";
import birthdayCard from "../../assets/birthdayCard.jpg";

const Test = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {[...Array(6)].map((_, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={birthdayCard} width="100%" />
              </div>
              <div className="card-back">
                <img src={imageCard} width="100%" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={birthdayCard} width="100%" />
            </div>
            <div className="card-back">
              <img src={imageCard} width="100%" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={birthdayCard} width="100%" />
            </div>
            <div className="card-back">
              <img src={imageCard} width="100%" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={birthdayCard} width="100%" />
            </div>
            <div className="card-back">
              <img src={imageCard} width="100%" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={birthdayCard} width="100%" />
            </div>
            <div className="card-back">
              <img src={imageCard} width="100%" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={birthdayCard} width="100%" />
            </div>
            <div className="card-back">
              <img src={imageCard} width="100%" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={birthdayCard} width="100%" />
            </div>
            <div className="card-back">
              <img src={imageCard} width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
