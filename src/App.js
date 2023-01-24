import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import BlackCard from "./components/BlackCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
