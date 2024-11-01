import "./app.css";
import Header from "./Components/Sections/Header";
import Hero from "./Components/Sections/Hero";
import Brands from "./Components/Sections/Brands";
import Features from "./Components/Sections/Features";
import How from "./Components/Sections/How";
import HowContinue from "./Components/Sections/HowContinue";
import Reviews from "./Components/Sections/Reviews";
import Contact from "./Components/Sections/Contact";
import Subscribe from "./Components/Sections/Subscribe";
import Footer from "./Components/Sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <How />
      <HowContinue />
      <Reviews />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
