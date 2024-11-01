import React from "react";

const StarRating = (props) => {
  const totalStars = 5;
  const fullStars = props.rating;
  const emptyStars = totalStars - fullStars;
  const ariaLabel = `Rating: ${fullStars} out of ${totalStars} stars`;

  const fullStarIcon = (index) => (
    <span
      key={`full-${index}`}
      className="fa-solid fa-star full-star fa-xs"
    ></span>
  );
  const emptyStarIcon = (index) => (
    <span
      key={`empty-${index}`}
      className="fa-regular fa-star empty-star fa-xs"
    ></span>
  );

  const stars = [];

  for (let index = 0; index < fullStars; index++) {
    stars.push(fullStarIcon(index));
  }

  for (let index = 0; index < emptyStars; index++) {
    stars.push(emptyStarIcon(index));
  }

  return (
    <div className="star-rating" role="img" aria-label={ariaLabel}>
      {stars}
    </div>
  );
};

export default StarRating;
