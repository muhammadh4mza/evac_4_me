
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-16 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6">
              Evac<span className="text-evac-orange">4</span>Me
              <span className="block text-evac-blue">Emergency Evacuation App for Everyone</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Navigate to safety with real-time evacuation routes during emergencies. 
              Designed with accessibility in mind for elderly, children, and intellectually 
              disabled users. Keep your loved ones informed when you're safe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-evac-blue hover:bg-blue-700 text-white">
                Coming Soon to App Stores
              </Button>
              <Button variant="outline" className="border-evac-blue text-evac-blue hover:bg-evac-blue hover:text-white">
                Contact Us / Collaborate
              </Button>
              <Button variant="outline" className="border-evac-orange text-evac-orange hover:bg-evac-orange hover:text-white">
                Invest in Evac4Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[40px] p-3 shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl"></div>
              <div className="h-full w-full bg-evac-blue/10 rounded-[32px] overflow-hidden relative">
                {/* App Screen Mockup */}
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-12 bg-evac-blue flex items-center justify-center">
                    <span className="text-white font-medium">Evac4Me Alert</span>
                  </div>
                  <div className="flex-1 p-3 bg-white">
                    <div className="bg-red-100 p-3 rounded-lg mb-4 border border-red-300">
                      <p className="text-sm font-medium text-red-800">ALERT: Wildfire in your area</p>
                      <p className="text-xs text-red-700">Please evacuate immediately</p>
                    </div>
                    <div className="h-[60%] bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-50 bg-[url('https://placeholder.pics/svg/300/DEDEDE/555555/map')]"></div>
                      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" className="bg-evac-blue w-full text-xs">View Routes</Button>
                      <Button size="sm" className="bg-evac-green w-full text-xs">I'm Safe</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
