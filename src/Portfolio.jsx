import React from 'react';
import { useTheme } from './context/ThemeContext';

function Portfolio() {
    const { darkMode } = useTheme();
    return (
        <section>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <i className="fas fa-folder-open text-blue-500"></i> My Works
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
                {/* Portfolio Card 1 */}
                <div className={`rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border flex flex-col group ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                    <div className={`h-48 relative overflow-hidden flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    {/* <img src="https://images.unsplash.com/photo-1584473453303-3e05a30e8c8a?auto=format&fit=crop&q=80&w=600&h=400" alt="IoT Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> */}
                    <i className={`fas fa-laptop-code text-5xl group-hover:scale-110 transition-transform duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                    <h4 className={`font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Smart Aquaponics System</h4>
                    <p className={`text-sm mb-4 flex-1 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>A management system featuring automated irrigation, pH balancing, and real-time dashboard monitoring.</p>
                    <a href="#" className={`text-sm font-semibold hover:underline mt-auto transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>View Project <i className="fas fa-arrow-right ml-1"></i></a>
                    </div>
                </div>

                {/* Portfolio Card 2 */}
                <div className={`rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border flex flex-col group ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                    <div className={`h-48 relative overflow-hidden flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <i className={`fas fa-laptop-code text-5xl group-hover:scale-110 transition-transform duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                        <h4 className={`font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Smart Farming</h4>
                        <p className={`text-sm mb-4 flex-1 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>A management smart farming ecosystem with intelligent soil monitoring, 
                                                                        plant management, and data-driven insights for optimal crop yields.</p>
                        <a href="#" className={`text-sm font-semibold hover:underline mt-auto transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>View Details <i className="fas fa-arrow-right ml-1"></i></a>
                    </div>
                </div>

                {/* Portfolio Card 3 */}
                <div className={`rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border flex flex-col group ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                    <div className={`h-48 relative overflow-hidden flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <i className={`fas fa-photo-video text-5xl group-hover:scale-110 transition-transform duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                    <h4 className={`font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Multimedia Leadership</h4>
                    <p className={`text-sm mb-4 flex-1 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Managed multimedia operations and layout designs for multiple university organizations including GRID and Computer Society.</p>
                    <a href="#" className={`text-sm font-semibold hover:underline mt-auto transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>View Gallery <i className="fas fa-arrow-right ml-1"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;