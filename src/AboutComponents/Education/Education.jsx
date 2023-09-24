import "./Education.css";
export default function Education() {
  return (
    <>
      <h2 className="content-title">Software Engineering</h2>
      <div className="eduation-flex">
        <div className="eduaction-image-and-title">
          <img
            src="https://media.licdn.com/dms/image/C560BAQE80-OG5Suvew/company-logo_200_200/0/1579597085262?e=2147483647&v=beta&t=V-8YngAx6dlhEFi3b61IGEFeTPMDsVWmA97n7Vmaf9w"
            alt="general assembly"
          />
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
      <br />
      <h2 className="content-title">Electrical Engineering</h2>

      <div className="eduation-flex">
        <div className="eduaction-image-and-title">
          <img
            src="https://uobhomesiteprod.s3.me-south-1.amazonaws.com/site-prod/uploads/2021/02/AYOUsonp-UOB-Colleges-new-logo.png"
            alt="uob logo"
          />
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
