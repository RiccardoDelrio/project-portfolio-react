import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>My Portfolio</h5>
                        <p className="mb-0">Showcasing my latest projects and work.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">
                            © {new Date().getFullYear()} My Portfolio. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
