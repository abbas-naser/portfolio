import main from "./images/Dashbord - Main.png";
import trends from "./images/Dashbord - Trends.png";
import vacancies from "./images/Dashbord - Vacancies.png";
import jobssource from "./images/se da jobs sources.png";
import topSkills from "./images/skills.png";
import seskills from "./images/se skills.png";
import daskills from "./images/da skills.png";
import ImageWithSpinner from "../../ImageWithSpinner/ImageWithSpinner";

export default function JobsInBahrain() {
  return (
    <div className="opacity-animation">
      <ImageWithSpinner src={main} alt="project screenshot" />
      <h2 className="project-title">Software VS Data Jobs in Bahrain</h2>
      <p className="first-p">
        As my Capstone project for the Data Analytics Bootcamp with{" "}
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
          <br />
          <ImageWithSpinner src={jobssource} alt="jobs sources figure" />
          <li>
            Python is the most required Skill in both fields, and (Python - AWS
            - SQL - Azure - Java) are common in both.
            <ImageWithSpinner
              src={topSkills}
              alt="top Skills required figure"
            />
          </li>
        </ul>
      </p>
      {/* Other Skills */}
      <li className="project-subTitle">Other Skills Required</li>
      <p>
        the Word Cloud below shows the most required skills in Software
        Engineering related jobs.
      </p>
      <ImageWithSpinner src={seskills} alt="software skills required figure" />
      <br />
      <p>
        And the Word Cloud below shows the most required skills in Data related
        jobs.
      </p>
      <ImageWithSpinner src={daskills} alt="data skills required figure" />
      <br />
      {/* dashboard */}
      <li className="project-subTitle">Dashboard</li>
      <p>
        This Dashboard was created to analyse job posts in Bahrain Ministry of
        Labor Website using Power BI.
      </p>
      <ImageWithSpinner src={main} alt="main dashbaord" />
      <ImageWithSpinner src={trends} alt="trends dashbaord" />
      <ImageWithSpinner src={vacancies} alt="vacancies dashbaord" />
      <br />
      {/* conclusion */}
      <li className="project-subTitle">to conclude </li>
      <p className="highlighted-p">
        In this project, I developed a strong understanding of various
        data-related concepts and skills, including data collection, cleaning,
        analysis, and deriving meaningful insights. Additionally, I gained
        hands-on experience with tools and technologies such as Python, Power
        BI, web scraping using Selenium, and working with large language models
        (LLM).
      </p>
      <br />
    </div>
  );
}
