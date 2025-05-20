
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <span className="text-xl font-bold text-evac-blue">Evac<span className="text-evac-orange">4</span>Me</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-evac-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-evac-blue transition-colors">How It Works</a>
          <a href="#collaborate" className="text-sm font-medium text-gray-700 hover:text-evac-blue transition-colors">Collaborate</a>
          <Button variant="outline" className="border-evac-blue text-evac-blue hover:bg-evac-blue hover:text-white">
            Contact Us
          </Button>
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
