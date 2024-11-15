import React from "react";
import Hero from "../Components/Sections/Hero";
import Brands from "../Components/Sections/Brands";
import Features from "../Components/Sections/Features";
import How from "../Components/Sections/How";
import HowContinue from "../Components/Sections/HowContinue";
import Reviews from "../Components/Sections/Reviews";
import ContactFAQ from "../components/sections/ContactFAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <How />
      <HowContinue />
      <Reviews />
      <ContactFAQ />
    </>
  );
};

export default Home;
