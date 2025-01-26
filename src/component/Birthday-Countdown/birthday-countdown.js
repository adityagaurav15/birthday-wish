import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import "./birthday-countdown.css";

const BirthdayCountdown = ({ birthdayDate }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const birthday = new Date(birthdayDate);
    const difference = birthday - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="countdown">
        <h1>Hey Naruto</h1>
        <h1>The Countdown to your Birthday has begun!</h1>
        <div className="timer">
          <div className="time">
            <span>{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <div className="time">
            <span>{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
          <div className="time">
            <span>{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="time">
            <span>{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
        <div className="wish">
          {timeLeft.days <= 0 &&
          timeLeft.hours <= 0 &&
          timeLeft.minutes <= 0 &&
          timeLeft.seconds <= 0
            ? "🎉 Happy Birthday! 🎂"
            : "Get Ready to Celebrate!"}
        </div>
        <motion.button
          className="surprise-button"
          whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#ff914d" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClickOpen}
        >
          Click for surprise
        </motion.button>
      </div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <strong>Get Lost..</strong>
            <p>Can't you see the timer?</p>
          </DialogTitle>
        </Dialog>
      </div>
    </>
  );
};

export default BirthdayCountdown;
