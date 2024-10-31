import React from "react";
import IconOnSquareBackground from "./IconOnSquareBackground";

const FeatureCard = (props) => {
  return (
    <div className="wrapper">
      <IconOnSquareBackground icon={props.icon} />
      <div>
        <h3 className="header inline">{props.title}</h3>
        <p className="text-m">{props.text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
