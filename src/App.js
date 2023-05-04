import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./scenes/global/nav/Navbar";
import Main from "./scenes/landing/Main";
import Footer from "./scenes/global/footer/Footer";
import Contact from "./scenes/contact/Contact";
import About from "./scenes/about/About";
import AdminLogin from "./scenes/admin/login/Login";
import AdminDashboard from "./scenes/admin/dashboard/Dashboard";
import Gallery from "./scenes/gallery/galleryHome/Gallery";
import ThankYou from "./scenes/thankyou/ThankYou";
import Exterior from "./scenes/gallery/exterior/Exterior";
import Bathrooms from "./scenes/gallery/bathrooms/Bathrooms";
import Kitchens from "./scenes/gallery/kitchens/Kitchens";
import PrivateRoutes from "./utils/PrivateRoutes";

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
        <Route path="/gallery/exterior" element={<Exterior />} />
        <Route path="/gallery/bathrooms" element={<Bathrooms />} />
        <Route path="/gallery/kitchens" element={<Kitchens />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} exact />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
