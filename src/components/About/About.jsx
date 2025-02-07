import "./About.css";

import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Certifications from "./Certifications/Certifications";
import SectionGroupButtons from "../SectionGroupButtons/SectionGroupButtons";
import Skills from "./Skills/Skills";
import { useState } from "react";

export default function About() {
  const [aboutComponentToShow, setAboutComponentToShow] = useState("skills");
  const btns = ["skills", "education", "experience", "certifications"];
  return (
    <div id="about-section" className="about-section">
      {/* btns group */}
      <SectionGroupButtons
        title="About Me"
        btns={btns}
        sectionId="about-section"
        selectedBtnClassName="selected-group-btn"
        componentToShowState={aboutComponentToShow}
        setComponentToShowState={setAboutComponentToShow}
      />

      <div className="about-content">
        {aboutComponentToShow === "skills" && <Skills />}
        {aboutComponentToShow === "education" && <Education />}
        {aboutComponentToShow === "experience" && <Experience />}
        {aboutComponentToShow === "certifications" && <Certifications />}
      </div>
    </div>
  );
}
