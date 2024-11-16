import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaBar = () => {
  return (
    <div className="icon-bar">
      <SocialMediaIcon
        icon="fab fa-facebook-f"
        link="https://www.facebook.com"
      />
      <SocialMediaIcon icon="fab fa-twitter" link="https://www.twitter.com" />
      <SocialMediaIcon
        icon="fab fa-instagram"
        link="https://www.instagram.com"
      />
      <SocialMediaIcon
        icon="fab fa-linkedin-in"
        link="https://www.linkedin.com"
      />
    </div>
  );
};

export default SocialMediaBar;
