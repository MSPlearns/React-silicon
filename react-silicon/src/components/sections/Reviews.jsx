import React from "react";
import ReviewCard from "../others/ReviewCard";
import "./reviews.css";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="desktop">
        <div className="container">
          <div className="card headline">
            <h2>Clients are Loving Our App</h2>
          </div>

          <ReviewCard
            name="Fannie Summers"
            jobTitle="Designer"
            gender="girl"
            rating="4"
            reviewText="Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet."
          />
          <ReviewCard
            name="Albert Flores"
            jobTitle="Developer"
            gender="boy"
            rating="5"
            reviewText="Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc."
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
