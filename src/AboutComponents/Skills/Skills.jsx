import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills">
      <h3 className="skills-title">Currently learning</h3>
      <div className="currently-learning">
        <li>React Native</li>
      </div>
      <hr className="about-hr " />
      <br />
      <h3 className="skills-title">Highlighted Skills</h3>
      <li>
        <span className="skills-li-bold">Programming languages:</span>{" "}
        JavaScript, HTML, CSS and Python.
      </li>
      <li>
        <span className="skills-li-bold">Frameworks and Libraries:</span>{" "}
        Bootstrap, Express, Mongoose, React and Flutter.
      </li>
      <li>
        <span className="skills-li-bold">Databases:</span> MongoDB.
      </li>

      <hr className="about-hr " />
      <br />
      <h3 className="skills-title">Languages</h3>
      <li>Arabic (Native) , English (Intermediate).</li>
    </div>
  );
}
