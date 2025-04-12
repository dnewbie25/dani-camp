import Experience from "./Experience";
export default function CV(props) {
  const info = props.information;
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
        <Experience experiences={info.experience}/>
      </div>
    </section>
  );
}
