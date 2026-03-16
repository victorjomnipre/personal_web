import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { ThemeToggleButton } from './components/changingModeBtn';

function Project() {
    const { darkMode } = useTheme();

    return (

        <div className={`fixed inset-0 w-screen h-screen overflow-auto transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <ThemeToggleButton />

            <div className="p-6 md:p-10 max-w-5xl mx-auto">
                <Link 
                    to="/" 
                    className={`mb-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                    <i className="fas fa-arrow-left"></i> Back to Home
                </Link>

                <section className={`p-8 rounded-2xl shadow-sm mb-10 border transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                    <h2 className={`text-xl font-bold mb-6 border-b pb-2 transition-colors duration-300 ${darkMode ? 'text-white border-gray-600' : 'text-gray-900 border-gray-200'}`}>
                        {/* Project Title Here */}
                    </h2>

                    
                </section>
            </div>
        </div>

    );
}

export default Project;