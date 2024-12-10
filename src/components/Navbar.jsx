import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Omega</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#services" className="hover:text-gray-200">Services</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-blue-500 text-white py-4 px-6 space-y-4`}
      >
        <a href="#home" className="block hover:text-gray-200">Home</a>
        <a href="#about" className="block hover:text-gray-200">About</a>
        <a href="#services" className="block hover:text-gray-200">Services</a>
        <a href="#contact" className="block hover:text-gray-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
