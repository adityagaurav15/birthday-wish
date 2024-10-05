import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Balloons from "../Balloons/Balloons";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSurpriseClick = () => {
    navigate("/cake");
  };

  return (
    <div className="background-animation">
      <div className="App">
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <Balloons />
        <motion.div className="" />

        <div className="birthday-container">
          <motion.h1
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="birthday-heading"
          >
            {/* 🎉 Aditya portfolio 🎉 */}
            Aditya portfolio
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <p className="birthday-message">
              Wishing you a day filled with love, joy, and all your favorite
              things!
            </p>
          </motion.div>

          <motion.div
            className="birthday-cake"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            🎂
          </motion.div>

          <motion.button
            className="surprise-button"
            whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#ff914d" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSurpriseClick}
          >
            Click to cut the cake
          </motion.button>
          <motion.button
            className="surprise-button"
            whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#ff914d" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/cards")}
          >
            Click to cards
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
