import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { ThemeToggleButton } from './components/changingModeBtn';
import Comments from './Comments';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost/personal_web/src/backend';
const MODEL_API = `${API_BASE}/model.php`;

function Project() {
    const { darkMode } = useTheme();
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    
    // Slideshow state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const fetchProject = useCallback(() => {
        fetch(`${MODEL_API}?action=projectdesc&id=${projectId}`)
            .then(res => res.json())
            .then(data => {
                setProject(data.data || {});
                // Reset to first image when a new project loads
                setCurrentImageIndex(0); 
            })
            .catch(err => console.error("Error loading project:", err));
    }, [projectId]);

    useEffect(() => {
        fetchProject();
    }, [fetchProject]);

    // Consolidate images into an array to render
    const images = project.images && project.images.length > 0 
        ? project.images 
        : (project.coverPhoto ? [project.coverPhoto] : []);
    const hasMultipleImages = images.length > 1;

    // Auto-slide effect
    useEffect(() => {
        if (!hasMultipleImages) return;

        const slideInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Changes image every 5 seconds

        return () => clearInterval(slideInterval); // Cleanup on unmount
    }, [hasMultipleImages, images.length]);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className={`fixed inset-0 w-screen h-screen overflow-auto transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <ThemeToggleButton />

            <div className="p-6 md:p-10 max-w-4xl mx-auto mt-8">
                
                <Link 
                    to="/" 
                    className={`mb-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                    <i className="fas fa-arrow-left"></i> Back to Portfolio
                </Link>

                <section className={`rounded-3xl shadow-sm mb-16 border overflow-hidden transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                
                    {/* --- Image Slideshow Cover --- */}
                    {images.length > 0 && (
                        <div className={`w-full h-64 md:h-96 relative border-b overflow-hidden group ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-100'}`}>
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={`${import.meta.env.BASE_URL}project_images/${img}`}
                                    alt={project.title ? `${project.title} - image ${index + 1}` : "Project Cover"}
                                    // Smooth crossfade transition
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                    }}
                                />
                            ))}

                            {/* Slideshow Controls (Only show if multiple images exist) */}
                            {hasMultipleImages && (
                                <>
                                    {/* Left Arrow */}
                                    <button 
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    
                                    {/* Right Arrow */}
                                    <button 
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                                    index === currentImageIndex 
                                                        ? 'bg-white w-4' 
                                                        : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                            ></button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <div className="p-8 md:p-12">
                        
                        <header className={`mb-12 border-b pb-10 ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                            <h1 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {project.title} 
                            </h1>
                            <p className={`text-base md:text-lg leading-relaxed max-w-3xl transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {project.description}
                            </p>
                        </header>

                        {/* Problem */}
                        <div className="mb-12">
                            <h3 className={`text-xl font-bold flex items-center gap-3 mb-4 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-red-900/50' : 'bg-red-100'}`}>
                                    <i className="fas fa-exclamation-triangle text-sm"></i>
                                </div>
                                The Challenge
                            </h3>
                            <div className={`p-6 md:p-8 rounded-2xl text-base md:text-lg leading-relaxed ${darkMode ? 'bg-gray-900/50 text-gray-300 border border-gray-700/50' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}>
                                {project.problem}
                            </div>
                        </div>

                        {/* Proposal */}
                        <div className="mb-12">
                            <h3 className={`text-xl font-bold flex items-center gap-3 mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-900/50' : 'bg-purple-100'}`}>
                                    <i className="fas fa-lightbulb text-sm"></i>
                                </div>
                                The Proposal
                            </h3>
                            <div className={`p-6 md:p-8 rounded-2xl text-base md:text-lg leading-relaxed ${darkMode ? 'bg-gray-900/50 text-gray-300 border border-gray-700/50' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}>
                                {project.proposal}
                            </div>
                        </div>

                        {/* The Solution */}
                        <div>
                            <h3 className={`text-xl font-bold flex items-center gap-3 mb-4 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-emerald-900/50' : 'bg-emerald-100'}`}>
                                    <i className="fas fa-rocket text-sm"></i>
                                </div>
                                The Solution
                            </h3>
                            <div className={`p-6 md:p-8 rounded-2xl text-base md:text-lg leading-relaxed ${darkMode ? 'bg-emerald-900/10 text-gray-300 border border-emerald-900/30' : 'bg-emerald-50 text-gray-800 border border-emerald-100'}`}>
                                {project.solution}
                            </div>
                        </div>

                    </div>
                </section>
                <Comments />
            </div>
        </div>
    );
}

export default Project;