import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

import Portfolio from './Portfolio';
import VoiceAssistant from './VoiceAssistant';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';

// Firebase
import { auth } from './components/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Bank from './components/Bank';
import Todolist from './components/To-do-List';
import AmazonClone from './components/AmazonClone';
import WeatherWebsite from './components/Weather';
import SpotifyClone from './components/Spotify';
import VideoPlayer from './components/VideoPlayer';
import SpeedOType from './components/SpeedOType';
import SignUpForm from './components/SignUpform';
import RecipeBasicWebsite from './components/Recipebasicwebsite';
import PuzzleGame from './components/PuzzleGame';
import DoubtSubmissionForm from './components/DoubtSubmissionform';
import Piano from './components/Piano';





function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [user, setUser] = useState(null);

  // Splash screen delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds splash

    return () => clearTimeout(timer);
  }, []);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Navbar name="VETRA" />
      <VoiceAssistant />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/portfolio" element={<Portfolio />} />
        
        <Route path="/project/bank-management-system" element={<Bank />} />
        <Route path="/project/todo-list" element={<Todolist />} />
        <Route path="/project/amazon-clone" element={<AmazonClone />} />
        <Route path="/project/weather" element={<WeatherWebsite />} />
        <Route path="/project/piano" element={<Piano />} />

        <Route path="/project/spotify" element={<SpotifyClone />} />
        <Route path="/project/video-player" element={<VideoPlayer />} />
        <Route path="/project/speedotype" element={<SpeedOType />} />
        <Route path="/project/signup-form" element={<SignUpForm />} />
        <Route path="/project/recipe" element={<RecipeBasicWebsite />} />
        <Route path="/project/puzzle-game" element={<PuzzleGame />} />
        <Route path="/project/doubt" element={<DoubtSubmissionForm />} />
        {/* Catch-all for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
