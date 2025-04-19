import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjust the import path as necessary
import ProjectDisplay from './ProjectDisplay'; // Create this component to display the selected project

const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectSelect = (project) => {
        setSelectedProject(project);
    };

    return (
        <div>
            <Navbar name="My Projects" onProjectSelect={handleProjectSelect} />
            {selectedProject ? (
                <ProjectDisplay projectName={selectedProject} />
            ) : (
                <div>Please select a project to view details.</div>
            )}
        </div>

        
    );
};

export default App;