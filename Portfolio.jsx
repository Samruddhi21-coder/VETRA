import React, { useState } from 'react';
import './Portfolio.css'; // Import CSS for animations

const Portfolio = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer , setUserAnswer] = useState('');

  const questions = [
    {
      question: "What is my favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C#"],
      answer: "JavaScript"
    },
    {
      question: "What is my favorite hobby?",
      options: ["Reading", "Gaming", "Traveling", "Cooking"],
      answer: "Gaming"
    },
    {
      question: "What city do I live in?",
      options: ["New York", "Los Angeles", "Chicago", "Houston"],
      answer: "New York"
    }
  ];

  const handleAnswer = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setQuizScore((prev) => prev + 1);
    }
    setUserAnswer('');
    setCurrentQuestion((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
  };

  const handleViewPortfolio = () => {
    setShowPortfolio(true);
    window.open('https://portfolio21-f9387.web.app', '_blank');
  };


  return (
    <div className={`portfolio-container ${showPortfolio ? 'fade-in' : ''}`}>
      <h1>Welcome to My Portfolio</h1>
      <button onClick={handleViewPortfolio}>View My Portfolio</button>

      {showPortfolio && (
        <div className="portfolio-content">
          <h2>Heyy!!</h2>
          <p>Discover my work and projects that showcase my skills and creativity. From innovative web applications to engaging designs, my portfolio highlights my journey as a developer. Click the button below to see my latest projects and learn more about my expertise!.</p>
          {/* Add your portfolio content here */}
        </div>
      )}
    </div>
  );

  
};

export default Portfolio;