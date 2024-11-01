import React from "react";
import phoneCard from "/src/assets/images/features-phone-with-card.svg";
import FeatureCard from "../others/FeatureCard";
import "./features.css";

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
          <FeatureCard
            icon="fa-credit-card-front"
            title="Easy Payments"
            text="Id mollis consectetur congue egestas egestas suspendisse blandit
                justo."
          />

          <FeatureCard
            icon="fa-shield-check"
            title="Data Security"
            text="Augue pulvinar justo, fermentum fames aliquam accumsan
                vestibulum non."
          />

          <FeatureCard
            icon="fa-chart-simple"
            title="Cost Statistics"
            text="Mattis urna ultricies non amet, purus in auctor non. Odio
                vulputate ac nibh."
          />

          <FeatureCard
            icon="fa-comments-question"
            title="Support 24/7"
            text="A elementum, imperdiet enim, pretium etiam facilisi in aenean
                quam mauris."
          />

          <FeatureCard
            icon="fa-wallet"
            title="Regular Cashback"
            text="Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                imperdiet eleifend."
          />
          <FeatureCard
            icon="fa-face-smile-beam"
            title="Top Standards"
            text="Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id.
                Sit facilisis dolor arcu."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
