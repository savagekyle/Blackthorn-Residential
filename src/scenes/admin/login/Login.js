import React, { useState } from "react";
import { Button } from "../../../components/button/Button";
import { ToastContainer, toast } from "react-toastify";
import Logo from "../../../assets/b-logo-white.svg";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const usernameValidation =
      username === process.env.REACT_APP_LOGIN_USERNAME;
    const passwordValidation =
      password === process.env.REACT_APP_LOGIN_PASSWORD;

    if (usernameValidation && passwordValidation) {
      localStorage.setItem("key", process.env.REACT_APP_USER_KEY);
      window.location.href = "/admin/dashboard";
    } else if (!usernameValidation && !passwordValidation) {
      toast.error("Incorrect username and password", {
        position: "bottom-right",
        autoClose: 5000,
      });
      setUsername("");
      setPassword("");
    } else if (!usernameValidation) {
      toast.error("Incorrect username", {
        position: "bottom-right",
        autoClose: 5000,
      });
      setUsername("");
      setPassword("");
    } else if (!passwordValidation) {
      toast.error("Incorrect password", {
        position: "bottom-right",
        autoClose: 5000,
      });
      setPassword("");
    }
  };

  return (
    <div className="login-image">
      <div className="login-box">
        <div className="input-fields">
          <img src={Logo} alt="BR Logo"></img>
          <h1>Admin Login</h1>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleSubmit}>
            Sign in
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
