import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="bg-gray-50 py-12 mt-20 px-4 md:px-8 animate-fadeIn"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              I am a Full Stack Developer
            </h1>
            <p className="text-gray-600 mb-6">
              I build modern, scalable web applications with responsive design and clean code.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                download
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Portrait of a developer coding"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
