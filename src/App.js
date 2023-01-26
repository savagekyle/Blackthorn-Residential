import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import BlackCard from "./components/BlackCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main /> <BlackCard /> <Testimonials />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
