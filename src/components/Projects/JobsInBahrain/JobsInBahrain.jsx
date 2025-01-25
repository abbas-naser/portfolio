import main from "./images/Dashbord - Main.png";
import trends from "./images/Dashbord - Trends.png";
import vacancies from "./images/Dashbord - Vacancies.png";
import jobssource from "./images/se da jobs sources.png";
import topSkills from "./images/skills.png";
import seskills from "./images/se skills.png";
import daskills from "./images/da skills.png";
export default function JobsInBahrain() {
  return (
    <div className="opacity-animation">
      <img className="project-main-image" src={main} alt="project screenshot" />
      <h2 className="project-title">Software VS Data Jobs in Bahrain</h2>
      <p className="first-p">
        As the Capstone project for the Data Analytics Bootcamp with{" "}
        <a
          className="bold"
          href="https://www.linkedin.com/company/general-assembly-middle-east/"
          target="_blanck"
          rel="noreferrer"
        >
          General Assembly Bahrain
        </a>{" "}
        , this analysis compares jobs related to building and maintaining
        software systems and jobs related to data in Bahrain. Data was collected
        using <span className="bold">Web Scraping (Selenium)</span> from three
        websites (
        <span className="bold">Bahrain Ministry of Labor, LinkedIn</span> and{" "}
        <span className="bold"> Indeed</span>
        ), from the second half of Dec 2024 to the first half of jan 2025.
      </p>
      <br /> {/* tools */}
      <p>
        Some of the tools used in this project:{" "}
        <ul>
          <li>
            <span className="bold">Selenium: </span>Web scraping.
          </li>
          <li>
            <span className="bold">Python & Pandas: </span>Data cleaning.
          </li>
          <li>
            <span className="bold">Large Language Models (LLM): </span>
            Translating ministry of labor website data from Arabic to English,
            and Extracting structured data from unstructured text.
          </li>
          <li>
            <span className="bold">Power BI: </span>Visualization and creating a
            Dashboard.
          </li>
        </ul>
      </p>
      <br />
      {/* Key Findings */}
      <p>
        <span className="">Key Findings: </span>
        <ul>
          <li>
            Software Engineering related job posts are more than{" "}
            <span className="bold">Twice</span> than the jobs related to Data.
          </li>
          <li>LinkedIn has the highest number of job posts for both fields.</li>
          <div className="project-image-container">
            <img src={jobssource} alt="jobs sources figure" />
          </div>
          <li>
            Python is the most required Skill in both fields, and (Python - AWS
            - SQL - Azure - Java) are common in both.
            <div className="project-image-container">
              <img src={topSkills} alt="top Skills required figure" />
            </div>
          </li>
        </ul>
      </p>
      <br />
      {/* Other Skills */}
      <li className="project-subTitle">Other Skills Required</li>
      <p>
        the Word Cloud below shows the most required skills in Software
        Engineering related jobs.
      </p>
      <div className="project-image-container">
        <img src={seskills} alt="software skills required figure" />
      </div>
      <br />
      <p>
        And the Word Cloud below shows the most required skills in Data related
        jobs.
      </p>
      <div className="project-image-container">
        <img src={daskills} alt="software skills required figure" />
      </div>
      <br />
      {/* dashboard */}
      <li className="project-subTitle">Dashboard</li>
      <p>
        This Dashboard was created to analyse job posts in Bahrain Ministry of
        Labor Website using Power BI.
      </p>
      <div className="project-image-container">
        <img src={main} alt="main dashbaord" />
      </div>
      <div className="project-image-container">
        <img src={trends} alt="trends dashbaord" />
      </div>
      <div className="project-image-container">
        <img src={vacancies} alt="vacancies dashbaord" />
      </div>
    </div>
  );
}
