import "./Projects.css";

import { useState } from "react";

import SnakesAndLadders from "./SnakesAndLadders/SnakesAndLadders";
import Memories from "./Memories/Memories";
import Portfolio from "./Portfolio/Portfolio";

import SectionGroupButtons from "../SectionGroupButtons/SectionGroupButtons";
import JobsInBahrain from "./JobsInBahrain/JobsInBahrain";

import memories from "./Memories/images/home-logged-out.png";
import jobs from "./JobsInBahrain/images/Dashbord - Main.png";
import snakes from "./SnakesAndLadders/images/play.png";

export default function Projects() {
  const [projectToShow, setProjectToShow] = useState(
    "Software VS Data Jobs in Bahrain"
  );

  const projects = [
    "Software VS Data Jobs in Bahrain",
    "snakes & ladders",
    "memories",
    "portfolio",
  ];
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
        {projectToShow === "Software VS Data Jobs in Bahrain" && (
          <JobsInBahrain />
        )}
        {projectToShow === "snakes & ladders" && <SnakesAndLadders />}
        {projectToShow === "memories" && <Memories />}
        {projectToShow === "portfolio" && <Portfolio />}
      </div>

      {/* images is not shown, it is added here so it will be downloaded by the browser so when user reach them they will be visible already */}
      <img src={memories} alt="hidden" style={{ display: "none" }} />
      <img src={jobs} alt="hidden" style={{ display: "none" }} />
      <img src={snakes} alt="hidden" style={{ display: "none" }} />
    </div>
  );
}
