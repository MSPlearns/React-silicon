import React from "react";
import avatarFem from "/src/assets/images/reviews-avatar-her.svg";
import avatarMasc from "/src/assets/images/reviews-avatar-him.svg";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="desktop">
        <div className="container">
          <div className="card headline">
            <h2>Clients are Loving Our App</h2>
          </div>

          <div className="card">
            <span
              className="icon shape-square icon-quotes fa-sharp fa-solid fa-quote-left"
              role="img"
              aria-label="quote"
            ></span>
            <div className="review">
              <div
                className="star-rating"
                role="img"
                aria-label="Rating: 4 out of 5 stars"
              >
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-regular fa-star empty-star fa-xs"></span>
              </div>
              <p>
                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
                sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
                aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis sit amet.
              </p>
              <div className="profile-card">
                <img
                  className="avatar"
                  src={avatarFem}
                  alt="avatar of a girl"
                />
                <p className="review-name">Fannie Summers</p>
                <p className="review-title">Designer</p>
              </div>
            </div>
          </div>

          <div className="card">
            <span
              className="icon shape-square icon-quotes fa-sharp fa-solid fa-quote-left"
              role="img"
              aria-label="quote"
            ></span>
            <div className="review">
              <div
                className="star-rating"
                role="img"
                aria-label="Rating: 5 out of 5 stars"
              >
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-solid fa-star full-star fa-xs"></span>
                <span className="fa-solid fa-star full-star fa-xs"></span>
              </div>
              <p>
                Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
                amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare
                dictumst sit amet. Dictum pretium dolor tincidunt egestas eget
                nunc.
              </p>
              <div className="profile-card">
                <img
                  className="avatar"
                  src={avatarMasc}
                  alt="avatar of a boy"
                />
                <p className="review-name">Albert Flores</p>
                <p className="review-title">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
