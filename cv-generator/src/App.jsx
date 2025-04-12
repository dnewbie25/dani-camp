import { useState } from "react";
import "./App.css";
import CV from "./CV";
import Inputs from "./Inputs";
function App() {
  const [information, setInformation] = useState({
    firstName: "john",
    lastName: "doe",
    email: "test@test.com",
    phone: "123-456-9999",
    college: "University of Nowhere",
    program: "Computer Science",
    isGraduated: true,
    graduationYear: 2019,
    jobTitle: "Office worker",
    startDate: "oct 2020",
    endDate: "Present",
    functions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    experience: [
      {
        jobTitle: "Office worker",
        startDate: "oct 2020",
        endDate: "Present",
        functions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        jobTitle: "Office worker",
        startMonth: "Oct",
        startYear: 2020,
        endMonth: "Nov",
        endYear: 2023,
        functions:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  });

  return (
    <main>
      <Inputs input={information} setInput={setInformation} />
      <CV information={information} />
    </main>
  );
}

export default App;
