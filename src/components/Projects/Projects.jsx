import "./Projects.css";

import { useState } from "react";

import SnakesAndLadders from "./SnakesAndLadders/SnakesAndLadders";
import Memories from "./Memories/Memories";
import Portfolio from "./Portfolio/Portfolio";

import SectionGroupButtons from "../SectionGroupButtons/SectionGroupButtons";

export default function Projects() {
  const [projectToShow, setProjectToShow] = useState("snakes & ladders");

  const projects = ["snakes & ladders", "memories", "portfolio"];
  return (
    <div id="projects-section" className="projects-section">
      {/* <hr /> */}
      <SectionGroupButtons
        title="Projects"
        btns={projects}
        sectionId="projects-section"
        componentToShowState={projectToShow}
        selectedBtnClassName="selected-group-btn"
        setComponentToShowState={setProjectToShow}
      />

      <div className="projects-content">
        {projectToShow === "snakes & ladders" && <SnakesAndLadders />}
        {projectToShow === "memories" && <Memories />}
        {projectToShow === "portfolio" && <Portfolio />}
      </div>
    </div>
  );
}
