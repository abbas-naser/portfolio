import "./Profile.css";

import { profile } from "../../data.js";
import profileImage from "../../images/profile.jpg";

export default function Profile() {
  return (
    <div className="profile-outer-container">
      <div className="profile-container">
        {/* profile image */}
        <div className="profile-image-container">
          <img src={profileImage} alt="profile" />
        </div>
        {/* porfile detials */}
        <div className="profile-details">
          <p className="profile-name">{profile.name}</p>
          <p className="profile-barnd-statement">{profile.brandStatement}</p>
          {/* porfile contact */}
          <div className="profile-contact">
            {/* <p>Email: {profile.email}</p> */}
            <p>
              <span className="bold">LinkedIn:{"  "}</span>
              <a
                href={profile.linkedInAccount}
                target="_blank"
                rel="noreferrer"
                className="no_underline"
              >
                {profile.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
