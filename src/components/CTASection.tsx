
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const CTASection = () => {
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
    <section className="py-20 dark-hexagon-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Sign up now and improve your skills in no time with our bootcamp program!
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-black/30 backdrop-blur-sm rounded-full">
            <Input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email...." 
              className="flex-1 px-6 py-4 h-14 rounded-full border-none bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-0"
            />
            <Button type="submit" className="h-12 bg-white hover:bg-gray-100 text-black rounded-full px-8 font-medium">
              Get Started
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
