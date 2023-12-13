import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills">
      {/* to learn */}
      <h2 className="content-title">To learn in 2023</h2>
      <div className="to-learn">
        <div className="skill-to-learn-with-icon skills-learning">
          <span class="material-symbols-outlined">clock_loader_10</span>
          <span className="learning"> React Native (Learning...). </span>{" "}
        </div>
        <div className="skill-to-learn-with-icon">
          <span class="material-symbols-outlined">circle</span>
          <span className="learning"> TypeScript.</span>{" "}
        </div>

        {/* <div className="skill-to-learn-with-icon">
          <span class="material-symbols-outlined">offline_bolt</span>
          <span className="learning">
            HV Authorization license (Electrical).
          </span>{" "}
        </div> */}

        <div className="skill-to-learn-with-icon skills-learned">
          <span class="material-symbols-outlined">radio_button_checked</span>
          <span className="learned">React Js.</span>{" "}
        </div>
      </div>
      <hr className="about-hr " />
      {/* highlighted skills */}
      <h2 className="content-title">Highlighted Skills</h2>
      <div className="highlighted-skills">
        <div className="skill-to-learn-with-icon">
          <span class="material-symbols-outlined">code</span>
          <div>
            <span className="bold-text">Programming languages:</span>{" "}
            JavaScript, HTML, CSS, Python and Dart.
          </div>
        </div>

        <div className="skill-to-learn-with-icon">
          <span class="material-symbols-outlined">code_blocks</span>
          <div>
            <span className="bold-text">Frameworks and Libraries:</span>{" "}
            Bootstrap, Express, Mongoose, React and Flutter.
          </div>
        </div>
        <div className="skill-to-learn-with-icon">
          <span class="material-symbols-outlined">database</span>
          <div>
            <span className="bold-text">Databases:</span> MongoDB.
          </div>
        </div>
      </div>
      <hr className="about-hr " />
      {/* languages */}
      <h2 className="content-title">Languages</h2>
      <div className="skill-to-learn-with-icon">
        <span class="material-symbols-outlined">language</span>
        <span className="learning">
          Arabic (Native) , English (Intermediate).
        </span>
      </div>
    </div>
  );
}
