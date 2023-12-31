import "./Experience.css";
import skd from "./images/skd1.png";
import aqua from "./images/aqua.png";
export default function Experience() {
  return (
    <>
      <h2 className="content-title">Electrical Experience</h2>
      <>
        <div className="experience-item-heading">
          <div className="experience-image-and-title">
            <img src={skd} />
            <div>
              <p className="bold-text">Electrical Engineer</p>
              <p>SKD Group, Bahrain</p>
            </div>
          </div>
          <p className="experience-date ">Oct - Dec 2022</p>
        </div>

        <div className="experience-item-list-detail">
          <li>
            Overseeing the installation of electrical systems to ensure that
            they meet the standards.
          </li>
          <li>
            Talking to customers to get their requirements and adjustments on
            the project.
          </li>
          <li>
            Calculating the appropriate sizes for cables, wires and other
            electrical equipment.
          </li>
        </div>
      </>
      <hr className="about-hr " />
      <>
        <div className="experience-item-heading">
          <div className="experience-image-and-title">
            <img src={aqua} />
            <div>
              <p className="bold-text">Electrical Engineer</p>
              <p>Aqua Technology Transfer, Bahrain</p>
            </div>
          </div>
          <p className="experience-date">Oct 2020 - Sep 2022</p>
        </div>

        <div className="experience-item-list-detail">
          <li>Testing of electrical motors.</li>
          <li>Troubleshooting electrical problems.</li>
          <li>
            Logging defective machines issues and keeping track of the fixing
            process stages.
          </li>
        </div>
      </>
    </>
  );
}
