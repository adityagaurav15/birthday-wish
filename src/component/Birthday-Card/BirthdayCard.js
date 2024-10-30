import React, { useState, useRef, useEffect } from "react";
import "./BirthdayCard.css";
import imageCard from "../../assets/birthdayInner.jpeg";
import birthdayCard from "../../assets/birthdayCard.jpg";

const FireWork = () => {
  const [cardClass, setCardClass] = useState("");
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  // Function to handle the card opening
  const openCard = () => {
    setCardClass("open-half");
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCardClass("open-fully");
      // Only play audio if the user has interacted
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      timerRef.current = null;
    }, 1000);
  };

  // Function to handle the card closing
  const closeCard = () => {
    setCardClass("close-half");
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCardClass("");
      // Pause the audio if it's playing
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      timerRef.current = null;
    }, 1000);
  };

  // Check if the audio can play
  useEffect(() => {
    const audioElement = audioRef.current;
    const handleCanPlay = () => {
      console.log("Audio is ready to play");
    };

    // Add canplaythrough event listener
    if (audioElement) {
      audioElement.addEventListener("canplaythrough", handleCanPlay);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("canplaythrough", handleCanPlay);
      }
    };
  }, []);

  return (
    <div class="birthday-card">
      <div class="cover-inner">
        <img src={imageCard} width="100%" />
      </div>

      <div class="cover-outer">
        <img src={birthdayCard} width="100%" />
      </div>

      <div class="text">
        <p class="title">
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
  );
};

export default FireWork;
