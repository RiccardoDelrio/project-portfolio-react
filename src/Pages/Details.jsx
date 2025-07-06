import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Details() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/projects/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Project not found');
                }
                return response.json();
            })
            .then(data => {
                setProject(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

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

    if (error) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-danger" role="alert">
                            <h4 className="alert-heading">Error!</h4>
                            <p>{error}</p>
                        </div>
                        <Link to="/" className="btn btn-primary">
                            Back to Projects
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-warning" role="alert">
                            Project not found
                        </div>
                        <Link to="/" className="btn btn-primary">
                            Back to Projects
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <Link to="/" className="btn btn-outline-secondary back-btn">
                        <i className="bi bi-arrow-left"></i> Back to Projects
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title display-5 mb-4">{project.name}</h1>
                            
                            <div className="mb-4">
                                {project.categories && project.categories.map(category => (
                                    <span key={category.id} className="badge bg-primary category-badge">
                                        {category.name}
                                    </span>
                                ))}
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="mb-3">Description</h3>
                                    <p className="project-description">{project.description}</p>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5 className="card-title">Project Info</h5>
                                            
                                            <div className="mb-3">
                                                <strong>Created:</strong>
                                                <div className="project-meta">
                                                    {new Date(project.created_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <strong>Last Updated:</strong>
                                                <div className="project-meta">
                                                    {new Date(project.updated_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>

                                            {project.url && (
                                                <div className="mb-3">
                                                    <a 
                                                        href={project.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="btn btn-primary w-100"
                                                    >
                                                        View Live Demo
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
