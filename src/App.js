import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
