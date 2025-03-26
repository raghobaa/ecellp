import React from 'react';
import { Menu, X, Scan as Scanner } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full z-50 bg-blue-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Scanner className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">E-Cell</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-blue-300 transition">About Us</a>
            <a href="#events" className="text-white hover:text-blue-300 transition">Events</a>
            <a href="#team" className="text-white hover:text-blue-300 transition">Team</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#events"
                className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#team"
                className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;