import React from "react";
import Hero from "../components/sections/Hero";
import Brands from "../components/sections/Brands";
import Features from "../components/sections/Features";
import How from "../components/sections/How";
import HowContinue from "../components/Sections/HowContinue";
import Reviews from "../components/sections/Reviews";
import Faq from "../components/sections/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <How />
      <HowContinue />
      <Reviews />
      <Faq />
    </>
  );
};

export default Home;
