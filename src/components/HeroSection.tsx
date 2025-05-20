
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex items-center justify-center pt-16 hexagon-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left max-w-5xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8 text-gray-900">
            Build your skills to be more powerful with us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
            Our instructors and mentors who are experienced and experts in their fields, form the backbone of our bootcamp program which aims to prepare participants with the latest skills and knowledge
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
