import React from 'react';


const projects = [
    {
        title: "Amazon Clone",
        description: "This is a brief description of my awesome project. It does amazing things!",
        link: "https://github.com/Samruddhi21-coder/Amazon-clone"
    },

    {
        title: "Piano using Python",
        description: "This is a brief description of my awesome project. It does amazing things!",
        link: "https://github.com/Samruddhi21-coder/Piano-using-python"
    },
    
    {
        title: "To-Do-List",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/To-Do-List"
    },
    {
        title: "Weather Website",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/Weather-Website"
    },
    {
        title: "Spotify Website",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/Spotify-website-"
    },
    {
        title: "Video Player",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/Video-Player"
    },
    {
        title: "SpeedOType",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/SpeedOType-using-React"
    },
    {
        title: "SignUp form",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/SignUp-form-using-React"
    },
    {
        title: "Recipe basic website",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/Recipe-basic-website-using-React"
    },
    {
        title: "Bank Management System",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/Bank-Management-System"
    },
    {
        title: "Puzzle Game",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/SignUp-form-using-React"
    },
    {
        title: "Doubt Submission form",
        description: "This project is another great example of my work. Check it out!",
        link: "https://github.com/Samruddhi21-coder/Doubt-Submission-form-using-React"
    }
    
   
];


const Home = () => {
    return (
        <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', padding: '20px' }}>
            
            <h1 style={{ textAlign: 'center', color: '#333' }}>My Projects</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{
                        background: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        width: '300px',
                        transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <h2 style={{ color: '#555' }}>{project.title}</h2>
                        <p style={{ color: '#777' }}>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: 'none',
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            display: 'inline-block',
                            marginTop: '10px',
                        }}>
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;