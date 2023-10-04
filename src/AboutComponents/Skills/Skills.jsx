import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills">
      {/* <h2 className="content-title">Currently learning</h2> */}
      <h2 className="content-title">To learn in 2023</h2>
      <div className="to-learn">
        <div className="skill-to-learn-with-icon skills-learning">
          {/* <span class="material-symbols-outlined">school</span> */}
          <span class="material-symbols-outlined">clock_loader_10</span>
          <span className="learning"> React Native (Learning...). </span>{" "}
        </div>
        <div className="skill-to-learn-with-icon">
          <span class="material-symbols-outlined">circle</span>
          <span className="learning"> TypeScript.</span>{" "}
        </div>
        <div className="skill-to-learn-with-icon">
          <span class="material-symbols-outlined">offline_bolt</span>
          <span className="learning">
            HV Authorization license (Electrical).
          </span>{" "}
        </div>
        <div className="skill-to-learn-with-icon skills-learned">
          {/* <span class="material-symbols-outlined">task</span> */}
          <span class="material-symbols-outlined">radio_button_checked</span>
          <span className="learned">React Js.</span>{" "}
        </div>

        {/* 
        <li>
          React Native. <span className="learning-span"> (learning)</span>
        </li>
        <li>TypeScript.</li>
        <li>
          <span className="learned">React.</span>{" "}
          <span className="learned-span"> (done)</span>
        </li> */}
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
