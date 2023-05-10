import React from "react";
import "./Dashboard.css";
import Logo from "../../../assets/b-logo-white.svg";
import ImageUpload from "../../../components/imageupload/ImageUpload";

const Dashboard = () => {
  return (
    <div className="dashboard-img">
      <div className="upload-box">
        <img src={Logo} alt="BR Logo" />
        <h1>Image Upload</h1>
        <ImageUpload />
      </div>
    </div>
  );
};

export default Dashboard;
