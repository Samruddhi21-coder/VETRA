import React from 'react';

const RecipeBasicWebsite = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Samruddhi21-coder/Recipe-basic-website-using-React', '_blank'); // Replace with your actual GitHub repo link
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🍳 Recipe Basic Website Project</h1>
        <p style={styles.description}>
          This is a simple recipe website where users can browse, search, and view different recipes. 
          It includes ingredients, cooking steps, and a user-friendly layout. The website is responsive and easy to use.
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
    background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
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
    color: '#fcb69f',
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
    backgroundColor: '#fcb69f',
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

export default RecipeBasicWebsite;
