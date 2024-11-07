import React from "react";
// import girlAvatar from "/src/assets/images/reviews-avatar-her.svg";
// import boyAvatar from "/src/assets/images/reviews-avatar-him.svg";

// const avatarMap = {
//   girl: girlAvatar,
//   boy: boyAvatar,
// };

const ReviewProfileCard = (props) => {
  // const avatarSrc = avatarMap[props.gender];
  return (
    <div className="profile-card">
      <img
        className="avatar"
        src={props.avatar}
        alt={`${props.name}'s avatar`}
      />
      <p className="review-name">{props.name}</p>
      <p className="review-role">{props.jobRole}</p>
    </div>
  );
};

export default ReviewProfileCard;
