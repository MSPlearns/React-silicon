import React, { useState, useEffect } from "react";
import ReviewCard from "../others/ReviewCard";
import "./reviews.css";

const Reviews = () => {
  const [reviewItems, setReviewItems] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await res.json();
    setReviewItems(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section id="reviews">
      <div className="desktop">
        <div className="container">
          <div className="card headline">
            <h2>Clients are Loving Our App</h2>
          </div>

          <>
            {reviewItems.map((item) => (
              <ReviewCard
                key={item.id}
                name={item.author}
                jobRole={item.jobRole}
                avatar={item.avatarUrl}
                rating={item.starRating}
                reviewText={item.comment}
              />
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
