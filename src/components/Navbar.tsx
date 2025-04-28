
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-marguru-600 font-heading">Marguru</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#features" className="text-gray-700 hover:text-marguru-600 transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-marguru-600 transition-colors duration-300">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-marguru-600 transition-colors duration-300">Pricing</a>
          </div>
          <Button className="btn-primary-gradient">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <a href="#features" className="text-gray-700 hover:text-marguru-600 transition-colors duration-300 py-2">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-marguru-600 transition-colors duration-300 py-2">How it Works</a>
          <a href="#pricing" className="text-gray-700 hover:text-marguru-600 transition-colors duration-300 py-2">Pricing</a>
          <Button className="btn-primary-gradient w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
