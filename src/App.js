// src/App.js
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./component/Home-page/Home";
import BirthdayCard from "./component/Birthday-Card/BirthdayCard";
import CakeCutting from "./component/Cake-Cutting/CakeCutting";
import BirthdayCountdown from "./component/Birthday-Countdown/birthday-countdown";
import Photo from "./component/Photo/Photo";

function App() {
  //const birthdayDate = new Date("2024-11-03T00:00:00"); // Set your birthday date here
  const birthdayDate = new Date("2024-01-03T00:00:00");
  const [isBirthdayPassed, setIsBirthdayPassed] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now > birthdayDate) {
      setIsBirthdayPassed(true);
    }
  }, [birthdayDate]);

  return (
    <div>
      <BrowserRouter basename="/birthday-wish">
        <Routes>
          {isBirthdayPassed ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<BirthdayCard />} />
              <Route path="/cake" element={<CakeCutting />} />
              <Route path="/photo" element={<Photo />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
