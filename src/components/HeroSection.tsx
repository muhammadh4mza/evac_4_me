import React from 'react';
import { Button } from "@/components/ui/button";
import BackgroundImage from "@/assets/hero/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 hexagon-gradient opacity-20 pointer-events-none"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start text-left py-16 md:py-20 lg:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[100px] font-[600] leading-tight sm:leading-[1.2] lg:leading-[1.1] tracking-tight mb-4 sm:mb-6 text-gray-900">
            Evac4Me – Emergency Evacuation App for Everyone
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl">
            A simple, accessible solution to help everyone evacuate safely during emergencies, designed with special focus on elderly and intellectually disabled users.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg">
              Coming Soon to App Stores
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 bg-transparent hover:bg-gray-100 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg"
            >
              Contact Us / Collaborate
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 bg-transparent hover:bg-gray-100 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg"
            >
              Invest in Evac4Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;