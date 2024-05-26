import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import trelloLogo from "../../assets/trello-logo .svg";
import leftImage from "../../assets/trello-left.svg";
import rightImage from "../../assets/trello-right.svg";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignUpPage = () => {
  const [userInformations, setUserInformations] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Email: "",
    Password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create a Trello Account";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformations((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInformations.Password !== confirmPassword) {
      setSnackbarMessage("Passwords do not match");
      setSnackbarSeverity("error");
      setOpen(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        userInformations
      );
      const token = response.data.token;

      // Store the token in local storage
      localStorage.setItem("token", token);

      console.log("Sign up successful:", response.data);
      setSnackbarMessage("Sign up successful!");
      setSnackbarSeverity("success");
      setOpen(true);

      // Redirect to the board page upon successful signup
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log("Register failed:", error);
      setSnackbarSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="signup-page">
      <img
        src={leftImage}
        alt="Left illustration"
        className="signup-image left"
      />
      <div className="signup-container">
        <img src={trelloLogo} alt="Trello Logo" className="logo" />
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign up for your account</h2>
          <input
            type="text"
            placeholder="Enter First Name"
            name="FirstName"
            value={userInformations.FirstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            name="LastName"
            value={userInformations.LastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Username"
            name="Username"
            value={userInformations.Username}
            
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="Email"
            value={userInformations.Email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="Password"
            value={userInformations.Password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <p className="terms">
            By signing up, you confirm that you’ve read and accepted our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </p>
          <button type="submit" className="btn signup-button">
            Submit
          </button>
          <Link to="/login" className="login-link">
            Already have an account? Log In
          </Link>
        </form>
      </div>
      <img
        src={rightImage}
        alt="Right illustration"
        className="signup-image right"
      />

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignUpPage;
