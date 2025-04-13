import Experience from "./Experience";
export default function CV(props) {
  const info = props.information;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let startDate = info.startDate ? info.startDate.split("-") : ["", ""];
  startDate = startDate[1] ? months[+startDate[1] - 1] + " " + startDate[0] : "N/A";

  let endDate = info.endDate ? info.endDate.split("-") : ["", ""];
  endDate = endDate[1] ? months[+endDate[1] - 1] + " " + endDate[0] : "Present";
  return (
    <section className="result">
      <div id="contact-info">
        <h1>{`${info.firstName} ${info.lastName}`}</h1>
        <h2>{info.email}</h2>
        <h2>{info.phone}</h2>
      </div>
      <div id="education">
        <h2>Education</h2>
        <hr />
        <div>
          <p>{info.college}</p>
          <p>{info.program}</p>
          <p>{info.isGraduated ? `${info.graduationYear}` : "In progress"}</p>
        </div>
      </div>
      <div id="experience">
        <h2>Experience</h2>
        <hr />
        {/* <Experience experiences={info.experience}/> */}
        <div>
          <p>{info.jobTitle}</p>
          <p>{startDate} - {endDate}</p>
          <p id="functions">{info.functions}</p>
        </div>
      </div>
    </section>
  );
}
