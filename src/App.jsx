import React from 'react';
import dp from "./assets/images/Sorita.jpg";

function App() {
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      
      <header className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8 border border-gray-100">
        <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner bg-gray-200">
          <img src={dp} alt="Profile" />
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Victor Jom A. Sorita</h1>
          <h2 className="text-xl text-blue-600 font-medium mb-4">BSIT Student</h2>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
            I am a BSIT student who loves doing random IT things, with a strong passion for IoT, Web Development, and Multimedia. 
            I am open to learn new skills to improve my arsenal and apply them to creative and technical work.
          </p>
          
          {/* Contacts */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a href="mailto:soritavictorjom@gmail.com" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="#" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <i className="fas fa-phone"></i> 09630437375
            </a>
            <a href="#" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <i className="fas fa-map-marker-alt"></i> Iloilo City
            </a>
            <a href="#" className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* --- RESUME DETAILS --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Education & Experience */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2"><i className="fas fa-graduation-cap mr-2 text-blue-500"></i> Background</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800">Iloilo Science and Technology University</h4>
            <p className="text-sm text-gray-500 mb-1">Bachelor of Science in Information Technology <br></br> 2022 - Present</p>
            <p className="text-sm text-gray-600">Dean's Lister S.Y. 2022-2025</p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2"><i className="fas fa-code mr-2 text-blue-500"></i> Tech Arsenal</h3>
          
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500 mb-2">Programming & Web</p>
            <div className="flex flex-wrap gap-2">
              {['C', 'Java', 'Arduino', 'PHP', 'JavaScript', 'HTML', 'CSS'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Multimedia & Design</p>
            <div className="flex flex-wrap gap-2">
              {['Photoshop', 'Lightroom', 'Premiere Pro', 'Canva', 'Figma', 'UI/UX'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <i className="fas fa-folder-open text-blue-500"></i> My Works
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Portfolio Card 1 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col group">
            <div className="h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center">
              {/* <img src="https://images.unsplash.com/photo-1584473453303-3e05a30e8c8a?auto=format&fit=crop&q=80&w=600&h=400" alt="IoT Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> */}
              <i className="fas fa-laptop-code text-5xl text-gray-400 group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-bold text-gray-900 mb-2">Smart Aquaponics System</h4>
              <p className="text-sm text-gray-600 mb-4 flex-1">A management system featuring automated irrigation, pH balancing, and real-time dashboard monitoring.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline mt-auto">View Project <i className="fas fa-arrow-right ml-1"></i></a>
            </div>
          </div>

          {/* Portfolio Card 2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col group">
            <div className="h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center">
              <i className="fas fa-laptop-code text-5xl text-gray-400 group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-bold text-gray-900 mb-2">Smart Farming</h4>
              <p className="text-sm text-gray-600 mb-4 flex-1">A management smart farming ecosystem with intelligent soil monitoring, 
                                                              plant management, and data-driven insights for optimal crop yields.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline mt-auto">View Details <i className="fas fa-arrow-right ml-1"></i></a>
            </div>
          </div>

          {/* Portfolio Card 3 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col group">
            <div className="h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center">
              <i className="fas fa-photo-video text-5xl text-gray-400 group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-bold text-gray-900 mb-2">Multimedia Leadership</h4>
              <p className="text-sm text-gray-600 mb-4 flex-1">Managed multimedia operations and layout designs for multiple university organizations including GRID and Computer Society.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline mt-auto">View Gallery <i className="fas fa-arrow-right ml-1"></i></a>
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm pb-8">
        <p>© 2026 Victor Jom A. Sorita. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;