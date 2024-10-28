import React from "react";
import phoneCard from "/src/assets/images/features-phone-with-card.svg";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="image desktop">
          <img
            src={phoneCard}
            alt="Phone displaying Silicon app features with payment card."
          />
        </div>

        <div className="headline">
          <h2 className="header">App Features</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
        </div>

        <div className="feature-list">
          <div className="wrapper">
            <div
              className="icon icon-background shape-square"
              name="credit card icon"
            >
              <span className="text-gradient fa fa-regular fa-credit-card-front"></span>
            </div>
            <div>
              <h3 className="header inline">Easy Payments</h3>
              <p className="text-m">
                Id mollis consectetur congue egestas egestas suspendisse blandit
                justo.
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div
              className="icon icon-background shape-square"
              name="shield icon"
            >
              <span className="text-gradient fa fa-regular fa-shield-check"></span>
            </div>
            <div>
              <h3 className="header inline">Data Security</h3>
              <p className="text-m">
                Augue pulvinar justo, fermentum fames aliquam accumsan
                vestibulum non.
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div
              className="icon icon-background shape-square"
              name="bar chart icon"
            >
              <span className="text-gradient fa fa-regular fa-chart-simple"></span>
            </div>
            <div>
              <h3 className="header inline">Cost Statistics</h3>
              <p className="text-m">
                Mattis urna ultricies non amet, purus in auctor non. Odio
                vulputate ac nibh.
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div
              className="icon icon-background shape-square"
              name="question icon"
            >
              <span className="text-gradient fa fa-regular fa-comments-question"></span>
            </div>
            <div>
              <h3 className="header inline">Support 24/7</h3>
              <p className="text-m">
                A elementum, imperdiet enim, pretium etiam facilisi in aenean
                quam mauris.
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div
              className="icon icon-background shape-square"
              name="wallet icon"
            >
              <span className="text-gradient fa fa-regular fa-wallet"></span>
            </div>
            <div>
              <h3 className="header inline">Regular Cashback</h3>
              <p className="text-m">
                Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                imperdiet eleifend.
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div
              className="icon icon-background shape-square"
              name="happy icon"
            >
              <span className="text-gradient fa fa-regular fa-face-smile-beam"></span>
            </div>
            <div>
              <h3 className="header inline">Top Standards</h3>
              <p className="text-m">
                Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id.
                Sit facilisis dolor arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
