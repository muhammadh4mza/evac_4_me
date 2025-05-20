
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed w-full backdrop-blur-md z-50">
      <div className="container flex items-center justify-between h-20 px-4 sm:px-10 lg:px-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-900">Evac<span className="text-evac-orange">4</span>Me</span>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-base font-medium text-gray-900 hover:text-evac-blue transition-colors">Menu</a>
          <a href="#features" className="text-base font-medium text-gray-900 hover:text-evac-blue transition-colors">Services</a>
          <a href="#how-it-works" className="text-base font-medium text-gray-900 hover:text-evac-blue transition-colors">Testimonial</a>
          <a href="#collaborate" className="text-base font-medium text-gray-900 hover:text-evac-blue transition-colors">About Us</a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
