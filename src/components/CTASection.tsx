
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
    <section className="py-16 hexagon-gradient text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sign up to be notified when Evac4Me launches</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Be among the first to access our life-saving app and help make emergency evacuation 
          safer and more accessible for everyone.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <Button type="submit" className="bg-gray-900 hover:bg-gray-800 rounded-full px-8 text-white">
              Notify Me
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
