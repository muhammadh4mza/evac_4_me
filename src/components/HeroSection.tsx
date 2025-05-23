import React from 'react';
import { Button } from "@/components/ui/button";
import BackgroundImage from "@/assets/hero/hero-background.jpg";
import PitchDeck from "@/assets/hero/EVAC4ME-Pitch-Deck.png";

const HeroSection = () => {
  return (
    <>
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
              <Button className="rounded-lg shadow-sm flex flex-col items-start text-left p-2 sm:p-4 bg-[#743d58] text-white/90 hover:text-gray-900 backdrop-blur-sm border border-[#743d58]/10 hover:bg-white/80 hover:border-[#743d58]/30 transition-all duration-300 hover:shadow-lg opacity-0 translate-y-10 animate-fade-up">
                Coming Soon to App Stores
              </Button>
              <Button 
                variant="outline" 
                className="rounded-lg text-card-foreground shadow-sm flex flex-col items-start text-left p-2 sm:p-4 bg-white/80 backdrop-blur-sm border border-[#743d58]/10 hover:bg-[#743d58] hover:border-[#743d58]/30 transition-all duration-300 hover:shadow-lg opacity-0 translate-y-10 animate-fade-up"
              >
                Contact Us / Collaborate
              </Button>
              <Button 
                variant="outline" 
                className="rounded-lg text-card-foreground shadow-sm flex flex-col items-start text-left p-2 sm:p-4 bg-white/80 backdrop-blur-sm border border-[#743d58]/10 hover:bg-[#743d58] hover:border-[#743d58]/30 transition-all duration-300 hover:shadow-lg opacity-0 translate-y-10 animate-fade-up"
              >
                Invest in Evac4Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16 md:py-24 " style={{ backgroundImage: `url(${PitchDeck})` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 md:gap-16">
            {/* Mission */}
            <div className="bg-[#f8f4f6] p-8 rounded-xl border border-[#743d58]/10">
              <h2 className="text-2xl sm:text-3xl font-[600] text-[#743d58] mb-6">Our Mission</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our mission is inspired by the Founder's passion for helping others, admiration for essential workers, 
                interest in global warming advocacy, and compassion for the world's most at-risk people like 
                handicapped individuals and seniors.
              </p>
              <div className="mt-6">
                <a href="www.b2bcompany.com" className="text-[#743d58] hover:underline font-medium">
                  www.b2bcompany.com
                </a>
              </div>
            </div>
            
            {/* Vision */}
            <div className="bg-[#f8f4f6] p-8 rounded-xl border border-[#743d58]/10">
              <h2 className="text-2xl sm:text-3xl font-[600] text-[#743d58] mb-6">Our Vision</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our vision for Evac4Me is to be universally available for the global population to benefit 
                from its features in the case of a natural catastrophe. We aim to help reduce people's 
                suffering and to adopt socially innovative business models that improve efficiency, 
                effectiveness, and inclusiveness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;