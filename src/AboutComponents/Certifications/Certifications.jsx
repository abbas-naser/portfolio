import "./Certifications.css";
export default function Certifications() {
  return (
    <>
      <h2 className="content-title">Electrical Certifications</h2>
      <div className="eduation-flex">
        <div>
          <li className="education-list">
            Electrical Installation Engineer License
          </li>
          <p className="about-text-after-list">
            Electricity and Water Authority, Bahrain
          </p>
        </div>
        <p className="education-date">Oct 2020</p>
      </div>
      <hr className="about-hr " />
      <div className="eduation-flex">
        <div>
          <li className="education-list">
            Electrical Installation Wireman License
          </li>
          <p className="about-text-after-list">
            Electricity and Water Authority, Bahrain
          </p>
        </div>
        <p className="education-date">Jul 2019</p>
      </div>
    </>
  );
}
