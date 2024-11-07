import React from "react";
import ReviewProfileCard from "./ReviewProfileCard";
import StarRating from "./starRating";

const ReviewCard = (props) => {
  return (
    <div className="card">
      <span
        className="icon shape-square icon-quotes fa-sharp fa-solid fa-quote-left"
        role="img"
        aria-label="quote"
      ></span>
      <div className="review">
        <StarRating rating={props.rating} />
        <p>{props.reviewText}</p>
        <ReviewProfileCard
          name={props.name}
          jobRole={props.jobRole}
          avatar={props.avatar}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
