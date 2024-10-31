import React from "react";
import IconOnSquareBackground from "./IconOnSquareBackground";

const IconCard = (props) => {
  return (
    <div className="wrapper">
      <IconOnSquareBackground icon={props.icon} />
      <p className="text-m">{props.text}</p>
    </div>
  );
};

export default IconCard;
