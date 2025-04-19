import React from 'react';

const SpotifyClone = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Samruddhi21-coder/Spotify-website-', '_blank'); // Replace with your GitHub repo link
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎵 Spotify Clone Project</h1>
        <p style={styles.description}>
          This Spotify clone lets users browse and play music with a sleek interface. It includes playlists, 
          media controls, and responsive design inspired by the original Spotify UI.
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
    background: 'linear-gradient(to right, #1db954, #191414)',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '90%',
    animation: 'fadeIn 1s ease-in-out',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '20px',
    color: '#1db954',
  },
  description: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#1db954',
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

export default SpotifyClone;
