import "./Education.css";
export default function Education() {
  return (
    <>
      <h3>Software Engineering</h3>
      <br />
      <div className="eduation-flex">
        <div>
          <li className="education-list">
            Software Engineering Immersive Program
          </li>
          <p className="about-text-after-list">General Assembly, Bahrain</p>
        </div>
        <p className="education-date">Jun - Sep 2023</p>
      </div>
      <hr className="about-hr " />
      <br />
      <h3>Electrical Engineering</h3>
      <br />
      <div className="eduation-flex">
        <div>
          <li className="education-list">B.Sc. in Electrical Engineering </li>
          <p className="about-text-after-list">
            University of Bahrain, Bahrain
          </p>
        </div>
        <p className="education-date">Sep 2013 - Mar 2019</p>
      </div>
    </>
  );
}
