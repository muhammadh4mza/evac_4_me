
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-evac-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sign up to be notified when Evac4Me launches</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
          Be among the first to access our life-saving app and help make emergency evacuation 
          safer and more accessible for everyone.
        </p>
        
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button className="bg-white text-evac-blue hover:bg-gray-100 px-6">
            Notify Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
