import "./Education.css";

import uob from "./images/uob.png";
import generaAssembly from "./images/genera-assembly.jpeg";
export default function Education() {
  return (
    <>
      {/* software */}
      <h2 className="content-title">Software Engineering</h2>
      <div className="eduation-item">
        <div className="eduaction-image-and-title">
          <img src={generaAssembly} />
          <div>
            <p className="education-list">
              Software Engineering Immersive Program
            </p>
            <p>General Assembly, Bahrain</p>
          </div>
        </div>
        <p className="education-date">Jun - Sep 2023</p>
      </div>
      <hr className="about-hr " />

      {/* electrical */}
      <h2 className="content-title">Electrical Engineering</h2>
      <div className="eduation-item">
        <div className="eduaction-image-and-title">
          <img src={uob} alt="uob logo" />
          <div>
            <p className="education-list">B.Sc. in Electrical Engineering</p>
            <p>University of Bahrain, Bahrain</p>
          </div>
        </div>
        <p className="education-date">Sep 2013 - Mar 2019</p>
      </div>
    </>
  );
}
