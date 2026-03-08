import React from 'react';
import { useTheme } from './context/ThemeContext';

function Experience() {
    const { darkMode } = useTheme();
    return (
        <section className={`p-8 rounded-2xl shadow-sm mb-10 border transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h3 className={`text-xl font-bold mb-6 border-b pb-2 transition-colors duration-300 ${darkMode ? 'text-white border-gray-600' : 'text-gray-900 border-gray-200'}`}>
                <i className="fas fa-briefcase mr-2 text-blue-500"></i> Experience
            </h3>

            <div className="mb-8"> {/* Smart Farming */}
                <div className={`flex items-center justify-between transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>ISAT U Research Services Division - Student Intern</h4>
                    <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Present</h4>
                </div>
                <p className={`text-sm mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Smart Farming System Development and Research</p>
                <ul className={`text-sm w-full md:w-[70%] text-justify list-disc pl-5 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>
                        Serving as a firmware and web developer for the Smart Farming System research project. Responsible for end-to-end IoT integration, 
                        utilizing ESP32 microcontrollers to automate soil and plant monitoring. Developed a web application that provides real-time, 
                        data-driven insights and remote management capabilities to optimize crop yields.
                    </li>
                </ul>
            </div>

            <div className="mb-8"> {/* Smart Aquaponics */}
                <div className={`flex items-center justify-between transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Capstone Project</h4>
                    <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>January 2025 - Present</h4>
                </div>
                <p className={`text-sm mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Smart Aquaponics Management System - IoT-Enabled, Control Monitoring <br></br> And Automation Platform</p>
                <ul className={`text-sm w-full md:w-[70%] text-justify list-disc pl-5 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>
                        Part of a five-team in developing a Smart Aquaponics Management
                        System with automated water irrigation, refilling, disposal, sanity dilution,
                        and pH balancing, along with automated fish feeding, real-time
                        monitoring, dashboarding, reporting, and parameter-triggered alerts that
                        can be remotely controlled through a web application.

                    </li>
                </ul>
            </div>

            <div className="mb-8"> {/* Smart Farming */}
                <div className={`flex items-center justify-between transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>AgriTech Innovate Hackathon 2025</h4>
                    <h4 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>March 2025</h4>
                </div>
                <p className={`text-sm mb-2 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Department of Agriculture: AgriTech Innovate</p>
                <ul className={`text-sm w-full md:w-[70%] text-justify list-disc pl-5 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>
                        Competed as part of a three-person team. Served as the lead designer, responsible for designing and implementing 
                        the user interface and user experience for the system's core concept.
                    </li>
                </ul>
            </div>

            <a href="#" className={`text-sm font-semibold hover:underline mt-4 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                See More <i className="fas fa-arrow-right ml-1"></i>
            </a>

        </section>
    )
}

export default Experience;