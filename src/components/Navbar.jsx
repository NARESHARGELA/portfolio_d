import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#hero">MyPortfolio</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#hero" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pt-2 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 text-lg">
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
