import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
