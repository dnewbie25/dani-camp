export default function Inputs({ input, setInput }) {
  function handleChange(event) {
    const { value, name } = event.target;
    let newValues = { ...input, [name]: value };
    setInput(newValues);
  }
  return (
    <section className="inputs">
      <form>
        <fieldset id="basic-information">
          <legend>Basic Information</legend>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" onChange={handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
          <label htmlFor="text">Phone</label>
          <input type="text" id="phone" name="phone" onChange={handleChange} />
        </fieldset>

        <fieldset id="education-information">
          <legend>Education</legend>
          <label htmlFor="university">University</label>
          <input type="text" id="university" name="university" onChange={handleChange} />
          <label htmlFor="isGraduated">
            Graduated?
            <input type="checkbox" id="isGraduated" name="isGraduated" onChange={handleChange} />
          </label>
          <label htmlFor="graduationYear">Graduation Year</label>
          <input
            type="number"
            id="graduationYear"
            name="graduationYear"
            step={1}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset id="experience">
          <legend>Experience</legend>
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" id="jobTitle" name="jobTitle" onChange={handleChange} />
          <label htmlFor="startDate">Start Date</label>
          <input type="month" id="startDate" name="startDate" onChange={handleChange} />
          <label htmlFor="endDate">End Date</label>
          <input type="month" id="endDate" name="endDate" onChange={handleChange} />
        </fieldset>
      </form>
    </section>
  );
}

