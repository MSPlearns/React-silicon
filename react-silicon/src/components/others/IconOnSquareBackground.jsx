import React from "react";

const IconOnSquareBackground = (props) => {
  return (
    <div className="icon icon-background shape-square">
      <span className={`text-gradient fa fa-regular ${props.icon}`}></span>
    </div>
  );
};

export default IconOnSquareBackground;
