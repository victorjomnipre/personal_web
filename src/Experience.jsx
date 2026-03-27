import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { ThemeToggleButton } from './components/changingModeBtn';

// list of experience
const experienceData = [
    {
        id: 1,
        title: "ISAT U Research Services Division - Student Intern",
        date: "Present",
        subtitle: "Smart Farming System Development and Research",
        details: "Serving as a firmware and web developer for the Smart Farming System research project. Responsible for end-to-end IoT integration, utilizing ESP32 microcontrollers to automate soil and plant monitoring. Developed a web application that provides real-time, data-driven insights and remote management capabilities to optimize crop yields."
    },
    {
        id: 2,
        title: "Capstone Project",
        date: "January 2025 - Present",
        subtitle: "Smart Aquaponics Management System - IoT-Enabled, Control Monitoring And Automation Platform",
        details: "Part of a five-team in developing a Smart Aquaponics Management System with automated water irrigation, refilling, disposal, sanity dilution, and pH balancing, along with automated fish feeding, real-time monitoring, dashboarding, reporting, and parameter-triggered alerts."
    },
    {
        id: 3,
        title: "AgriTech Innovate Hackathon 2025",
        date: "March 2025",
        subtitle: "Department of Agriculture: AgriTech Innovate",
        details: "Competed as part of a three-person team. Served as the lead designer, responsible for designing and implementing the user interface and user experience for the system's core concept."
    }
];

function Experience() {
    const { darkMode } = useTheme();

    return (
        <div className={`fixed inset-0 w-screen h-screen overflow-auto transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <ThemeToggleButton />

            <div className="p-6 md:p-10 max-w-5xl mx-auto">
                <Link 
                    to="/" 
                    className={`mb-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                >
                    <i className="fas fa-arrow-left"></i> Back to Home
                </Link>

                <section className={`p-8 md:p-10 rounded-3xl shadow-sm mb-10 border transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                    <h3 className={`text-2xl font-bold mb-10 border-b pb-4 transition-colors duration-300 ${darkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'}`}>
                        <i className="fas fa-briefcase mr-3 text-blue-500"></i> Full Experience
                    </h3>

                    {/* Timeline Container */}
                    <div className={`relative border-l-2 ml-3 md:ml-4 transition-colors duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        
                        {experienceData.map((item) => (
                            <div key={item.id} className="mb-12 ml-8 md:ml-10 relative group">
                                
                                {/* Timeline Dot */}
                                <span className={`absolute flex items-center justify-center w-4 h-4 rounded-full -left-[39px] md:-left-[47px] top-1.5 ring-4 transition-all duration-300 group-hover:scale-125 ${darkMode ? 'ring-gray-800 bg-blue-500 group-hover:bg-blue-400' : 'ring-white bg-blue-500 group-hover:bg-blue-600'}`}></span>
                                
                                {/* Header / Date */}
                                <div className={`flex flex-col md:flex-row md:items-center justify-between mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                    <span className={`mt-2 md:mt-0 inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                                        <i className="far fa-calendar-alt mr-1.5"></i> {item.date}
                                    </span>
                                </div>
                                
                                {/* Subtitle */}
                                <p className={`text-sm font-medium mb-3 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {item.subtitle}
                                </p>
                                
                                {/* Details */}
                                <ul className={`text-sm w-full md:w-[85%] text-justify list-disc pl-5 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <li>{item.details}</li>
                                </ul>
                            </div>
                        ))}
                        
                    </div>
                </section>

                <footer className={`mt-16 text-center text-sm pb-8 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <p>© 2026 Victor Jom A. Sorita. Built with React & Tailwind CSS.</p>
                </footer>
            </div>
        </div>
    );
}

export default Experience;