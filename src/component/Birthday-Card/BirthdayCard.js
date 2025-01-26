import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./BirthdayCard.css";
import imageCard from "../../assets/birthdayInner.jpeg";
import birthdayCard from "../../assets/birthdayCard.jpg";

const BirthdayCard = () => {
  const navigate = useNavigate();
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
            Happy Birthday! <br /> Naruto
          </p>
          <p>"Stay blessed and party hard"</p>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15px" }}
      >
        <motion.button
          className="click-button"
          whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#ff914d" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/photo")}
        >
          Click
        </motion.button>
      </div>
    </div>
  );
};

export default BirthdayCard;
