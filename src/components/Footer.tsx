import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import SecBakground from "@/assets/hero/sec-hero-background.png";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be notified when Evac4Me launches.",
      });
      setEmail('');
    } else {
      toast({
        title: "Please enter a valid email",
        description: "We need your email to notify you",
        variant: "destructive"
      });
    }
  };

  return (
    <footer className="text-gray-400 bg-cover bg-center" style={{
      backgroundImage: `url(${SecBakground})`,
    }}>
      {/* CTA Section */}
      <section className="py-12 md:py-20 min-h-[400px] md:min-h-[600px] dark-hexagon-gradient text-white flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[600] mb-6 px-4 capitalize">
            Sign up now and improve your skills in no time with our bootcamp program!
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-8 sm:mt-12 px-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-1 sm:p-2 bg-black/30 backdrop-blur-sm rounded-full">
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email...." 
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-14 rounded-full border-none bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-0 text-sm sm:text-base"
              />
              <Button 
                type="submit" 
                className="h-10 sm:h-12 bg-white hover:bg-gray-100 text-black rounded-full px-6 sm:px-8 font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-4 border-t border-gray-800 gap-4 md:gap-0">
          <div className="flex items-center">
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
          
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm">
            <Link to="#" className="hover:text-white transition-colors">Menu</Link>
            <Link to="#" className="hover:text-white transition-colors">Services</Link>
            <Link to="#" className="hover:text-white transition-colors">Testimonial</Link>
            <Link to="#" className="hover:text-white transition-colors">About Us</Link>
          </nav>
          
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Evac4Me. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;