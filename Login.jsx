// src/components/Login.jsx
import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../components/firebase';
import './Login.css';

const Login = () => {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log("User logged in:", user);
        alert(`Welcome, ${user.displayName}`);
        // You can route to homepage or dashboard here
      })
      .catch(error => {
        console.error("Login error:", error);
        alert("Login failed. Try again.");
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to VETRA</h2>
      <button onClick={handleGoogleLogin} className="google-btn">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
