import React from "react";
import howGraph from "/src/assets/images/how-continue-square-graph.svg";
import howContacts from "/src/assets/images/how-continue-square-contact-list.svg";

const HowContinue = () => {
  return (
    <section id="how-continue">
      <div className="desktop">
        <div className="container">
          <div className="content" id="content-1">
            <h3>Make your money transfer simple and clear</h3>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fa-sharp fa-regular fa-circle-check text-primary"></i>
                </span>
                Banking transactions are free for you
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-sharp fa-regular fa-circle-check text-primary"></i>
                </span>
                No monthly cash commission
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-sharp fa-regular fa-circle-check text-primary"></i>
                </span>
                Manage payments and transactions online
              </li>
            </ul>
            <a
              className="plain-link btn btn-primary shape-rectangular btn-shadow-out"
              href="#"
            >
              <span>Learn more</span>
              <span className="fa-sharp fa-solid fa-arrow-right"></span>
            </a>
          </div>

          <div className="image" id="image-1">
            <img src={howGraph} alt="Screenshot of balance graph" />
          </div>

          <div className="image">
            <img src={howContacts} alt="Contacts and bankcard" />
          </div>

          <div className="content" id="content-2">
            <h3>Receive payment from international bank details</h3>

            <div className="icon-cards">
              <div className="wrapper">
                <div className="icon icon-background shape-square">
                  <span className="text-gradient fa-regular fa-credit-card-front"></span>
                </div>
                <p className="text-m">
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </div>

              <div className="wrapper">
                <div className="icon icon-background shape-square">
                  <span
                    className="text-gradient fa-regular fa-wallet"
                    name="wallet icon"
                  ></span>
                </div>
                <p className="text-m">
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </div>
            </div>
            <a
              className="plain-link btn btn-primary shape-rectangular btn-shadow-out"
              href="#"
            >
              <span>Learn more</span>
              <span className="fa-sharp fa-solid fa-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowContinue;
