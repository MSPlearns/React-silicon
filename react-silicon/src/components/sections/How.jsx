import React from "react";
import phoneFrame from "/src/assets/images/how-section-phone-frame.svg";
import screenGraph from "/src/assets/images/how-section-screen-budget-graph.svg";
import screenBudget from "/src/assets/images/how-section-screen-transaction-history.svg";
import screenContacts from "/src/assets/images/how-section-screen-contact-list.svg";
import screenTransference from "/src/assets/images/how-section-screen-ongoing-transference.svg";

const How = () => {
  return (
    <section id="how">
      <div className="container">
        <h2 className="headline text-align-center">How Does It Work?</h2>

        <div className="img-container">
          <img
            className="img-phone-layer"
            id="phone-frame"
            src={phoneFrame}
            aria-hidden="true"
          />
          <img
            className="img-phone-layer desktop"
            id="screen-graph"
            src={screenGraph}
            alt="Phone screen displaying a budget graph for financial overview."
          />
          <img
            className="tablet desktop img-phone-layer"
            id="screen-card"
            src={screenBudget}
            alt="Phone screen showing transaction history with bank card at the front"
          />
          <img
            className="img-phone-layer"
            id="screen-contacts"
            src={screenContacts}
            alt="Phone screen featuring a list of contacts for money transfers."
          />
          <img
            className="tablet img-phone-layer"
            id="screen-tranference"
            src={screenTransference}
            alt="Phone screen displaying ongoing money transfer progress."
          />
        </div>

        <div className="content desktop">
          <p className="subheader">Latest transaction history</p>
          <p className="text">
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
            Arcu sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>

        <div className="content mobile tablet">
          <p className="subheader">
            Transfers to people from your contact list
          </p>
          <p className="text">
            Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
