import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="birthday-container">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="birthday-heading"
        >
          🎉 Happy Birthday! 🎉
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <p className="birthday-message">
            Wishing you a day filled with love, joy, and laughter!
          </p>
        </motion.div>

        <motion.div
          className="birthday-cake"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          🎂
        </motion.div>

        <motion.button
          className="surprise-button"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          Click for a Surprise!
        </motion.button>
      </div>
    </div>
  );
}

export default App;
