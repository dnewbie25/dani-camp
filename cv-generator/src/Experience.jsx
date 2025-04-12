export default function Experience(props){
  const jobExperiences = props.experiences.map(experience=>(
    <div>
      <p>{experience.jobTitle}</p>
      <p>{`${experience.startMonth}, ${experience.startYear} - ${experience.endMonth}, ${experience.endYear}`}</p>
      <p>{experience.functions}</p>
    </div>
  ))
  return (
    <div>
      {jobExperiences}
    </div>
  )
}

// {
//   jobtTitle: "Office worker",
//   startMonth: "Oct",
//   startYear: 2020,
//   endMonth: "Nov",
//   endYear: "Present",
// },