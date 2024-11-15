import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/sections/Header";
import Footer from "./Components/Sections/Footer";
import Subscribe from "./Components/Sections/Subscribe";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";

//Todo - if there's time:
//-Add transitions so the page renders smoothly (is very abrupt now)
//-Add a breadcrumb navigation component
//-Add a "Coming soon" page for blank pages

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
