import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      {/* profile image */}
      <div className="profile-image-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
          alt="profile"
        />
      </div>
      {/* porfile detials. */}
      <div className="profile-details">
        <p className="profile-name">Abbas Abdulla Naser</p>
        <p>
          Full-Stack Web Developer with Electrical Engineering background. An
          avid learner motivated by solving problems, developing responsive full
          stack web applications.
        </p>
        {/* <p>abbass.abdulla.naser@gmail.com</p>
        <p>33791746</p> */}
      </div>
    </div>
  );
}
