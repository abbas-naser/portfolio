import "./Certifications.css";
export default function Certifications() {
  return (
    <>
      <h2 className="content-title">Electrical Certifications</h2>
      <div className="certifications-item">
        <div className="certification-with-icon">
          <span class="material-symbols-outlined">badge</span>
          <div>
            <p className="bold-text">
              Electrical Installation Engineer License
            </p>
            <p>Electricity and Water Authority, Bahrain</p>
          </div>
        </div>
        <p className="certifications-item-date">Oct 2020</p>
      </div>
      <hr className="about-hr " />

      <div className="certifications-item">
        <div className="certification-with-icon">
          <span class="material-symbols-outlined">badge</span>
          <div>
            <p className="bold-text">Electrical Installation Wireman License</p>
            <p>Electricity and Water Authority, Bahrain</p>
          </div>
        </div>
        <p className="certifications-item-date">Jul 2019</p>
      </div>

      {/* <div className="eduation-flex">
        <div>
          <li className="education-list">
            Electrical Installation Engineer License
          </li>
          <p className="about-text-after-list">
            Electricity and Water Authority, Bahrain
          </p>
        </div>
        <p className="education-date">Oct 2020</p>
      </div> */}

      {/* <div className="eduation-flex">
        <div>
          <li className="education-list">
            Electrical Installation Wireman License
          </li>
          <p className="about-text-after-list">
            Electricity and Water Authority, Bahrain
          </p>
        </div>
        <p className="education-date">Jul 2019</p>
      </div> */}
    </>
  );
}
