import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import BlackCard from "./components/BlackCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery";
import GalleryCTA from "./components/GalleryCTA";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main /> <BlackCard /> <GalleryCTA /> <Testimonials />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
