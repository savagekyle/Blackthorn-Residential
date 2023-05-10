import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Logo from "../../../assets/b-logo-white.svg";
import { ToastContainer } from "react-toastify";
import ImageUpload from "../../../components/imageupload/ImageUpload";

const Dashboard = () => {
  const [verified, setVerified] = useState(false);
  const key = localStorage.getItem("key");

  const setKey = () => {
    localStorage.setItem("key", "");
    window.location.href = "/admin";
  };
  useEffect(() => {
    const checkKey = () => {
      const verified = key === process.env.REACT_APP_USER_KEY;
      setVerified(verified);
    };

    checkKey();
  }, [key]);

  return (
    <div className="dashboard-img">
      <div className="upload-box">
        <img src={Logo} alt="BR Logo" />
        <h1>Image Upload</h1>
        <ImageUpload />
      </div>
      {verified && (
        <p onClick={setKey} className="logout">
          Logout
        </p>
      )}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
