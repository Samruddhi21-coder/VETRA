import React from 'react';

const DoubtSubmissionForm = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Samruddhi21-coder/Doubt-Submission-form-using-React', '_blank'); // Replace with your actual GitHub repo link
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>💡 Doubt Submission Form Project</h1>
        <p style={styles.description}>
          This project allows users to submit doubts related to various topics. 
          Users can provide details such as their question, category, and contact information. 
          The form also includes validation to ensure proper input.
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
    background: 'linear-gradient(to right, #8e44ad, #c0392b)',
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
    color: '#c0392b',
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
    backgroundColor: '#c0392b',
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

export default DoubtSubmissionForm;
