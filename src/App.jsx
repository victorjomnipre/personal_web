import React from 'react';
import { useTheme } from './context/ThemeContext';
import { ThemeToggleButton } from './components/changingModeBtn';
import Background from './Background';
import Portfolio from './Portfolio';
import Experience from './Experience';
import awake from "./assets/images/Sorita.jpg";
import sleep from "./assets/images/sleep.jpg";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`fixed inset-0 w-screen h-screen overflow-auto transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <ThemeToggleButton />

      <div className="p-6 md:p-10 max-w-5xl mx-auto">
      
      <header className={`rounded-2xl shadow-sm p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8 border transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className={`w-48 h-48 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 ${darkMode ? 'border-4 border-gray-500' : 'border-4 border-gray-100'}`}>
          <img src={darkMode ? sleep : awake} alt="Profile" />
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className={`text-4xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Victor Jom A. Sorita</h1>
          <h2 className={`text-xl font-medium mb-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>BSIT Student</h2>
          <p className={`mb-6 leading-relaxed max-w-2xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            &nbsp; &nbsp; &nbsp;Currently taking a Bachelor of Science in Information Technology at Iloilo Science and Technology
            University, with an interest in layout and design, programming, and IoT based projects. I
            am open to learning new skills to improve my arsenal and apply them to creative and technical work.
          </p>
          
          {/* Contacts */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a href="mailto:soritavictorjom@gmail.com" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
              <i className="fas fa-envelope"></i> victorjomsorita@gmail.com
            </a>
            <a href="#" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
              <i className="fas fa-phone"></i> 09630437375
            </a>
            <a href="#" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
              <i className="fas fa-map-marker-alt"></i> Iloilo City
            </a>
            <a href="#" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </header>

      <Background />
      <Experience />
      <Portfolio />
      
      {/* Footer */}
      <footer className={`mt-16 text-center text-sm pb-8 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <p>© 2026 Victor Jom A. Sorita. Built with React & Tailwind CSS.</p>
      </footer>
      </div>
    </div>
  );
}

export default App;