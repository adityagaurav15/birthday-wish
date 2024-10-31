import React from "react";
import "./BirthdayCard.css";
import imageCard from "../../assets/birthdayInner.jpeg";
import birthdayCard from "../../assets/birthdayCard.jpg";

const BirthdayCard = () => {
  return (
    <div className="background-card">
      <div className="birthday-card">
        <div className="cover-inner">
          <img src={imageCard} width="100%" />
        </div>

        <div className="cover-outer">
          <img src={birthdayCard} width="100%" />
        </div>

        <div className="text">
          <p className="title">
            Happy Birthday! <br /> Saloni
          </p>
          <p>
            "I was going to get you something amazing, but then I remembered—you
            already have me. You're welcome! 😉 Jokes aside, may your day be
            filled with laughter, cake, and lots of love. <br />
            Once again, happiest birthday, Saloni! ❤️"
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
