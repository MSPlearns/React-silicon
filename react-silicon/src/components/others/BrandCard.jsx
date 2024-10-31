import React from "react";

const BrandCard = (props) => {
  return (
    <div id={`brand-logo-${props.id}`} className="brand-box">
      <img src={props.image} alt={`brand logo ${props.id}`} />
    </div>
  );
};

export default BrandCard;
