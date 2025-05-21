
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-400 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 border-t border-gray-800">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <span className="text-white font-semibold text-lg">Evac4Me</span>
          </div>
          
          <nav className="flex items-center space-x-8 text-sm mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Menu</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Testimonial</a>
            <a href="#" className="hover:text-white">About Us</a>
          </nav>
          
          <div className="text-sm">
            © {new Date().getFullYear()} Evac4Me. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
