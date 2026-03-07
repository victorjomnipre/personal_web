import React from 'react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggleButton() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-10 right-16 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-50 ${
        darkMode
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300 hover:scale-110 hover:shadow-2xl'
          : 'bg-white hover:bg-gray-50 text-gray-900 hover:scale-110 hover:shadow-2xl'
      }`}
      style={darkMode ? {
        boxShadow: '0 0 20px rgba(253, 224, 71, 0.4)'
      } : {
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <i className={`fas text-3xl transition-transform duration-300 ${darkMode ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  );
}
