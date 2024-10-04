// src/App.js
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./component/Home-page/Home";
import BirthdayCard from "./component/Birthday-Card/BirthdayCard";
import CakeCutting from "./component/Cake-Cutting/CakeCutting";
import BirthdayCountdown from "./component/Birthday-Countdown/birthday-countdown";

function App() {
  //const birthdayDate = new Date("2024-11-03T00:00:00"); // Set your birthday date here
  const birthdayDate = new Date("2024-01-03T00:00:00");
  const [isBirthdayPassed, setIsBirthdayPassed] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now > birthdayDate) {
      setIsBirthdayPassed(true); // Set to true if the birthday date has passed
    }
  }, [birthdayDate]);

  return (
    <div>
      <Routes>
        {/* <Route
          path="/count"
          element={<BirthdayCountdown birthdayDate={birthdayDate.toString()} />}
        /> */}
        {isBirthdayPassed ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/cards" element={<BirthdayCard />} />
            <Route path="/cake" element={<CakeCutting />} />
          </>
        ) : (
          <Route
            path="/"
            element={
              <BirthdayCountdown birthdayDate={birthdayDate.toString()} />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
