import { useState } from "react";

function App() {
  const [birthday, setBirthday] = useState("");
  const [zodiac, setZodiac] = useState("");

  // Determine zodiac sign based on month and day.
  const getZodiacSign = (month, day) => {
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return "Capricorn";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!birthday) return;

    // Create a Date object from the birthday input.
    const dateObj = new Date(birthday);
    // getMonth() returns 0 for January so we add 1.
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    const sign = getZodiacSign(month, day);
    setZodiac(sign);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Zodiac Sign Finder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your birthday:{" "}
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Find Zodiac
        </button>
      </form>
      {zodiac && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Zodiac sign is: {zodiac}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
