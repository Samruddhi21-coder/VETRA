import React from 'react';
import './AboutUs.css'; // Import the CSS file for styles




const AboutMe = () => {
    return (
        <div className="about-container">
            <h1 className="name animate-fade-in">Samruddhi V. Shrawagi</h1>
            <p className="description animate-fade-in"> 
                Hello! I'm a passionate developer with a love for creating dynamic and responsive web applications. 
                I enjoy working with modern technologies and continuously learning new skills to improve my craft.
            </p>
            <h2 className="skills-title animate-fade-in">Skills</h2>
            <div className="skills-container">
                <div className="skill animate-bounce">JavaScript</div>
                <div className="skill animate-bounce">React</div>
                <div className="skill animate-bounce">Node.js</div>
                <div className="skill animate-bounce">HTML & CSS</div>
                <div className="skill animate-bounce">Git & GitHub</div>
                <div className="skill animate-bounce">AWS</div>
            </div>


            <div className='null'> 




            </div>


            <div className="about-me">
            <h2></h2>
            <p>
                {/* I am a passionate developer with a strong background in various technologies. 
                I love to create efficient and scalable applications. */}
            </p>
            <div className="qualities">
                <h2>My Qualities</h2>
                <ul>
                    <li className="fade-in">💻 Proficient in JavaScript, React, and Node.js</li>
                    <li className="fade-in">🌐 Experience with RESTful APIs and Microservices</li>
                    <li className="fade-in">🛠️ Strong understanding of version control (Git)</li>
                    <li className="fade-in">📊 Familiar with data visualization and analytics</li>
                    <li className="fade-in">🔍 Detail-oriented and problem solver</li>
                    <li className="fade-in">🤝 Excellent team player and communicator</li>
                </ul>

            </div>
        </div>

        <div>
            
        </div>

        
        </div>

        
        



         
    );
};

export default AboutMe;