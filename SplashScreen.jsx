import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(1); // Notify parent after animation
    }, 3000); // 3 seconds duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <h1 className="shimmer-text">VETRA</h1>
    </div>
  );
};

export default SplashScreen;
