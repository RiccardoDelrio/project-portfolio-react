import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/projects/')
            .then(response => response.json())
            .then(data => {
                setProjects(data.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false)
            });
    }, []);

    if (loading) {
        return (
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4 text-center mb-5">My Portfolio</h1>
                    <p className="lead text-center mb-5">
                        Welcome to my project portfolio. Here you can explore my latest work and projects.
                    </p>
                </div>
            </div>

            <div className="row">
                {projects.map(project => (
                    <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 project-card">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text flex-grow-1">
                                    {project.description.length > 150 
                                        ? project.description.substring(0, 150) + '...' 
                                        : project.description}
                                </p>
                                
                                <div className="mb-3">
                                    {project.categories && project.categories.map(category => (
                                        <span key={category.id} className="badge bg-secondary category-badge">
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="mt-auto">
                                    <Link 
                                        to={`/project/${project.id}`} 
                                        className="btn btn-primary me-2"
                                    >
                                        View Details
                                    </Link>
                                    {project.url && (
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {projects.length === 0 && (
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="lead">No projects found.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

