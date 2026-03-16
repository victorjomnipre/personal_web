import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost/personal_web/src/backend';
const MODEL_API = `${API_BASE}/model.php`;

function Portfolio() {
    const { darkMode } = useTheme();
    const [projects, setProjects] = useState([]);

    const fetchProjects = useCallback(() => {
        fetch(`${MODEL_API}?action=projectlist`)
            .then(res => res.json())
            .then(data => {
                
                setProjects(data.data || []);
            })
            .catch(err => console.error("Error loading projects:", err));
    }, []);

    useEffect(() => {
        fetchProjects();

        const interval = setInterval(() => {
            fetchProjects();
        }, 5000); 

        return () => clearInterval(interval);
    }, 
    [fetchProjects]);

    return (
        <section>

            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <i className="fas fa-folder-open text-blue-500"></i> My Works
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {projects.map((project) => (

                    <div
                        key={project.projectID}
                        className={`rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border flex flex-col group ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
                    >
                        <div className={`h-48 relative overflow-hidden flex items-center justify-center ${darkMode ? 'bg-white' : 'bg-white'}`}>
                            {project.coverPhoto ? (
                                <img
                                    src={`${import.meta.env.BASE_URL}project_images/${project.coverPhoto}`}
                                    alt={project.projectName}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                    }}
                                />
                            ) : (
                                <i className={`fas fa-laptop-code text-5xl group-hover:scale-110 transition-transform duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                            )}

                        </div>

                        {/* CONTENT */}
                        <div className="p-5 flex-1 flex flex-col">

                            <h4 className={`font-bold text-15 mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {project.projectName}
                            </h4>

                            <p className={`text-sm mb-4 flex-1 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {project.description}
                            </p>

                            <Link
                                to={`/project/${project.projectID}`}
                                className={`text-sm font-semibold hover:underline mt-auto transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                            >
                                View Project <i className="fas fa-arrow-right ml-1"></i>
                            </Link>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;