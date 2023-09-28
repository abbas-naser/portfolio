import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills">
      {/* <h2 className="content-title">Currently learning</h2> */}
      <h2 className="content-title">To learn in 2023</h2>
      <div className="to-learn">
        <li>
          React Native. <span className="learning-span"> (learning)</span>
        </li>
        <li>TypeScript.</li>
        <li>
          <span className="learned">React.</span>{" "}
          <span className="learned-span"> (done)</span>
        </li>
      </div>
      <hr className="about-hr " />

      <h2 className="content-title">Highlighted Skills</h2>
      <div className="highlighted-skills">
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
      </div>

      <hr className="about-hr " />
      <h2 className="content-title">Languages</h2>
      <li>Arabic (Native) , English (Intermediate).</li>
    </div>
  );
}
