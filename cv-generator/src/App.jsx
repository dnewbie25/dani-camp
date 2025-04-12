import { useState } from "react";
import "./App.css";
import CV from "./CV";
function App() {
  const [information, setInformation] = useState({
    firstName: "john",
    lastName: "doe",
    email: "test@test.com",
    phone: "123-456-9999",
    college: "University of Nowhere",
    program: "Computer Science",
    isGraduated: true ,
    graduationYear: 2019,
    experience: [
      {
        jobTitle: "Office worker",
        startMonth: "Oct",
        startYear: 2020,
        endMonth: "Nov",
        endYear: "Present",
        functions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        jobTitle: "Office worker",
        startMonth: "Oct",
        startYear: 2020,
        endMonth: "Nov",
        endYear: 2023,
        functions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
    ],
  });

  return (
    <main>
      <section className="inputs"></section>
      <CV information={information} />
    </main>
  );
}

export default App;
