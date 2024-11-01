import React from "react";
import logoipsum1 from "/src/assets/images/logoipsum-1.svg";
import logoipsum2 from "/src/assets/images/logoipsum-2.svg";
import logoipsum3 from "/src/assets/images/logoipsum-3.svg";
import logoipsum4 from "/src/assets/images/logoipsum-4.svg";
import logoipsum5 from "/src/assets/images/logoipsum-5.svg";
import logoipsum6 from "/src/assets/images/logoipsum-6.svg";
import BrandCard from "../others/BrandCard";
import "./brands.css";

const Brands = () => {
  return (
    <section id="brands">
      <div className="tablet desktop">
        <div className="container">
          <BrandCard id={1} image={logoipsum1} />
          <BrandCard id={2} image={logoipsum2} />
          <BrandCard id={3} image={logoipsum3} />
          <BrandCard id={4} image={logoipsum4} />
          <BrandCard id={5} image={logoipsum5} />
          <BrandCard id={6} image={logoipsum6} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
