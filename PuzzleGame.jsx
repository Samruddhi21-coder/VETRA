import React from 'react';

const PuzzleGame = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Samruddhi21-coder/Puzzle-Game', '_blank'); // Replace with your actual GitHub repo link
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🧩 Puzzle Game Project</h1>
        <p style={styles.description}>
          This is a fun and interactive puzzle game where players need to rearrange pieces to complete a picture. 
          It challenges players' spatial awareness and problem-solving skills. The game features a timer and a high score tracker.
        </p>
        <button style={styles.button} onClick={handleGitHubClick}>
          🚀 View on GitHub
        </button>
      </div>
    </div>
  );
};

// Animation keyframes
const fadeIn = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #ffcccb, #ff99cc)',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '90%',
    animation: 'fadeIn 1s ease-in-out',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '20px',
    color: '#ff99cc',
  },
  description: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#ff99cc',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};

// Inject animation globally
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeIn, styleSheet.cssRules.length);

export default PuzzleGame;
