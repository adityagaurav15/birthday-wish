import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import Balloons from "../Balloons/Balloons";
import "./CakeCutting.css";

const CakeCutting = () => {
  const navigate = useNavigate();

  const [cutCake, setCutCake] = useState(false);

  // Animation variants for the cake and flame
  const cakeVariants = {
    initial: { scale: 0.8 },
    animate: { scale: 1, transition: { duration: 0.5 } },
  };

  const flameVariants = {
    flicker: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: { repeat: Infinity, duration: 0.8 },
    },
  };

  const handleCut = () => {
    setCutCake(true);
  };

  return (
    <div
      className="cake-container"
      style={{ display: "grid", justifyContent: "center" }}
    >
      {cutCake && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <Balloons />
        </>
      )}

      <div>
        <motion.div
          className="cake"
          variants={cakeVariants}
          initial="initial"
          animate="animate"
        >
          <div className="plate"></div>
          <div className="layer layer-bottom"></div>
          <div className="layer layer-middle"></div>
          <div className="layer layer-top"></div>
          <div className="icing"></div>
          <div className="drip drip1"></div>
          <div className="drip drip2"></div>
          <div className="drip drip3"></div>
          <div className="candle">
            <motion.div
              className="flame"
              variants={flameVariants}
              animate="flicker"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      <div>
        {!cutCake ? (
          <motion.button
            className="cut-cake-button"
            whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#ff914d" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCut}
          >
            Cut Cut Cut
          </motion.button>
        ) : (
          <motion.button
            className="cut-cake-button"
            whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#ff914d" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/cards")}
          >
            Click to cards
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default CakeCutting;
