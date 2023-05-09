import React from "react";
import "./Dashboard.css";
import ImageUpload from "../../../ImageUpload";

const Dashboard = () => {
  return (
    <div className="dashboard-img">
      <div className="upload-box">
        <ImageUpload collection="kitchens" />
      </div>
    </div>
  );
};

export default Dashboard;
