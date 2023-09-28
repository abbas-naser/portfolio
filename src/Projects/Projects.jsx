import { useState } from "react";
import "./Projects.css";
import SnakesAndLadders from "../ProjectsComponents/SnakesAndLadders/SnakesAndLadders";
import Memories from "../ProjectsComponents/Memories/Memories";
import homeLoggedOut from "../ProjectsComponents/Memories/images/home-logged-out.png";

export default function Projects() {
  const [projectToShow, setProjectToShow] = useState("snakes&ladders");
  return (
    <div id="projects" className="projects-outer-container">
      {/* image is not shown, it is added here so it will be downloaded by the browser  */}
      <img src={homeLoggedOut} style={{ display: "none" }} />
      <div className="projects-container">
        <div className="projects-btns-group">
          <h2 className="group-btns-title">Projects</h2>
          <button
            className={
              projectToShow === "snakes&ladders"
                ? "selected-project-btn"
                : undefined
            }
            onClick={() => setProjectToShow("snakes&ladders")}
          >
            snake & ladders
          </button>
          <button
            className={
              projectToShow === "memories" ? "selected-project-btn" : undefined
            }
            onClick={() => {
              setProjectToShow("memories");
            }}
          >
            memories
          </button>
        </div>

        <div className="projects-content">
          {projectToShow === "snakes&ladders" && <SnakesAndLadders />}
          {projectToShow === "memories" && <Memories />}
        </div>
      </div>
    </div>
  );
}
