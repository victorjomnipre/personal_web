import React from 'react';
import { useTheme } from './context/ThemeContext';


function Background() {
  const { darkMode } = useTheme();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Education & Experience */}
        <div className={`p-8 rounded-2xl shadow-sm border transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h3 className={`text-xl font-bold mb-6 border-b pb-2 transition-colors duration-300 ${darkMode ? 'text-white border-gray-600' : 'text-gray-900 border-gray-200'}`}><i className="fas fa-graduation-cap mr-2 text-blue-500"></i> Background</h3>
            
            <div className="mb-6">
                <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Iloilo Science and Technology University</h4>
                <p className={`text-sm mb-1 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Bachelor of Science in Information Technology <br></br> 2022 - Present</p>
                <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Dean's Lister S.Y. 2022-2025</p>
            </div>
        </div>

        {/* Skills */}
        <div className={`p-8 rounded-2xl shadow-sm border transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h3 className={`text-xl font-bold mb-6 border-b pb-2 transition-colors duration-300 ${darkMode ? 'text-white border-gray-600' : 'text-gray-900 border-gray-200'}`}><i className="fas fa-code mr-2 text-blue-500"></i> Tech Arsenal</h3>
            
            <div className="mb-4">
                <p className={`text-sm font-medium mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Programming & Web</p>
                <div className="flex flex-wrap gap-2">
                    {['C', 'Java', 'Arduino', 'PHP', 'JavaScript', 'HTML', 'CSS'].map(skill => (
                    <span key={skill} className={`px-3 py-1 text-xs font-bold rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-50 text-blue-700'}`}>{skill}</span>
                    ))}
                </div>
            </div>

            <div>
                <p className={`text-sm font-medium mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Multimedia & Design</p>
                <div className="flex flex-wrap gap-2">
                    {['Photoshop', 'Lightroom', 'Premiere Pro', 'Canva', 'Figma', 'UI/UX'].map(skill => (
                    <span key={skill} className={`px-3 py-1 text-xs font-bold rounded-full transition-colors duration-300 ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-50 text-purple-700'}`}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Background;


      