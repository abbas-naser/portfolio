import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills">
      <h2 className="content-subTitle">Currently learning</h2>
      <div className="currently-learning">
        <li>React Native.</li>
      </div>
      <hr className="about-hr " />
      <br />
      <h2 className="content-subTitle">Highlighted Skills</h2>
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
      <h2 className="content-subTitle">Languages</h2>
      <li>Arabic (Native) , English (Intermediate).</li>
    </div>
  );
}
