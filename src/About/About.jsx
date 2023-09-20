import "./About.css";
import { useState } from "react";
import Education from "../AboutComponents/Education/Education";
import Certifications from "../AboutComponents/Certifications/Certifications";
import Experience from "../AboutComponents/Experience/Experience";
import Skills from "../AboutComponents/Skills/Skills";

export default function About() {
  const [aboutComponent, setAboutComponent] = useState("skills");
  return (
    <div className="about-container">
      {/* btns group */}
      <div className="about-btns-group">
        <button
          className={aboutComponent === "skills" && "selected-about-btn"}
          onClick={() => setAboutComponent("skills")}
        >
          skills
        </button>
        <button
          className={aboutComponent === "education" && "selected-about-btn"}
          onClick={() => {
            setAboutComponent("education");
          }}
        >
          education
        </button>

        <button
          className={
            aboutComponent === "certifications" && "selected-about-btn"
          }
          onClick={() => setAboutComponent("certifications")}
        >
          certifications
        </button>
        <button
          className={aboutComponent === "experience" && "selected-about-btn"}
          onClick={() => setAboutComponent("experience")}
        >
          experience
        </button>
      </div>

      <hr className="about-group-btn-hr" />
      <div className="about-content">
        {aboutComponent === "skills" && <Skills />}
        {aboutComponent === "education" && <Education />}
        {aboutComponent === "certifications" && <Certifications />}
        {aboutComponent === "experience" && <Experience />}
      </div>
    </div>
  );
}
