import { useState } from "react";
import "./Projects.css";
import SnakesAndLadders from "../ProjectsComponents/SnakesAndLadders/SnakesAndLadders";

export default function Projects() {
  const [projectToShow, setProjectToShow] = useState("snakes&ladders");
  return (
    <div className="projects-outer-container">
      <div className="projects-container">
        <div className="projects-btns-group">
          <h2 className="group-btns-title">Projects</h2>
          <button
            className={
              projectToShow === "snakes&ladders" && "selected-project-btn"
            }
            onClick={() => setProjectToShow("snakes&ladders")}
          >
            snake & ladders
          </button>
          <button
            className={projectToShow === "memories" && "selected-project-btn"}
            onClick={() => {
              setProjectToShow("memories");
            }}
          >
            memories
          </button>
        </div>

        <div className="projects-content">
          {projectToShow === "snakes&ladders" && <SnakesAndLadders />}
        </div>
      </div>
    </div>
  );
}
