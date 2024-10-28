import React from "react";
import logoipsum1 from "/src/assets/images/logoipsum-1.svg";
import logoipsum2 from "/src/assets/images/logoipsum-2.svg";
import logoipsum3 from "/src/assets/images/logoipsum-3.svg";
import logoipsum4 from "/src/assets/images/logoipsum-4.svg";
import logoipsum5 from "/src/assets/images/logoipsum-5.svg";
import logoipsum6 from "/src/assets/images/logoipsum-6.svg";

const Brands = () => {
  return (
    <section id="brands">
      <div className="tablet desktop">
        <div className="container">
          <div id="brand-logo-1" className="brand-box">
            <img src={logoipsum1} alt="brand logo 1" />
          </div>

          <div id="brand-logo-2" className="brand-box">
            <img src={logoipsum2} alt="brand logo 2" />
          </div>

          <div id="brand-logo-3" className="brand-box">
            <img src={logoipsum3} alt="brand logo 3" />
          </div>

          <div id="brand-logo-4" className="brand-box">
            <img src={logoipsum4} alt="brand logo 4" />
          </div>

          <div id="brand-logo-5" className="brand-box">
            <img src={logoipsum5} alt="brand logo 5" />
          </div>

          <div id="brand-logo-6" className="brand-box">
            <img src={logoipsum6} alt="brand logo 6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
