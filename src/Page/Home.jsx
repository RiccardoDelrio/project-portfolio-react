import React from 'react';
import { useState } from 'react';

export default function Home() {
    const [projects, setProject] = useState("")
    fetch('http://127.0.0.1:8000/api/projects/')
        .then(response => response.json())
        .then(data => {
            setProject(data.data)
            console.log(projects)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return (
        <div>
            <h1>Home Page</h1>
            {projects.map(project => (
                <div key={project.id}>{project.name}</div>
            ))}

        </div>
    );
};

