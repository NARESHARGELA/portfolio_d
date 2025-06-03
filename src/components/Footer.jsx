import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Branding */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-amber-400">About</a>
          <a href="#projects" className="hover:text-amber-400">Projects</a>
          <a href="#contact" className="hover:text-amber-400">Contact</a>
        </div>

        {/* Socials (optional) */}
        {/* Uncomment if needed
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
