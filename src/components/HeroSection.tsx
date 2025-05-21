
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex items-center justify-center pt-16" style="background-image: url('/path/to/image.jpg'), var(--hexagon-gradient); background-size: cover, auto; background-position: center, center;">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left max-w-5xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8 text-gray-900">
            Evac4Me – Emergency Evacuation App for Everyone
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
            A simple, accessible solution to help everyone evacuate safely during emergencies, designed with special focus on elderly and intellectually disabled users.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg">
              Coming Soon to App Stores
            </Button>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              Contact Us / Collaborate
            </Button>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              Invest in Evac4Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
