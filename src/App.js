import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./scenes/global/nav/Navbar";
import Main from "./scenes/landing/Main";
import Footer from "./scenes/global/footer/Footer";
import Contact from "./scenes/contact/Contact";
import About from "./scenes/about/About";
import Gallery from "./scenes/gallery/Gallery";
import ThankYou from "./scenes/thankyou/ThankYou";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element=<Main /> />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
