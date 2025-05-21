
import React from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: "Ruben Hox",
    description: "Instant notification with critical information when a disaster is detected in your area."
  },
  {
    name: "Rakibul Hasan",
    description: "Clear directions to the nearest safe zones, avoiding danger areas based on real-time data."
  },
  {
    name: "Antonius",
    description: "Special feature connects elderly and disabled users with nearby assistance for evacuation."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-black text-white scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Meet Our Expert Instructors and Mentors
            </h2>
          </div>
          
          <div className="self-center">
            <p className="text-gray-300 text-lg">
              Our instructors and mentors who are experienced and experts in their fields, 
              form the backbone of our bootcamp program which aims to prepare participants 
              with the latest skills and knowledge.
            </p>
          </div>
        </div>
        
        <Separator className="bg-gray-800 mb-10" />
        
        <div className="mb-10 flex justify-between items-center">
          <h3 className="text-xl font-medium text-gray-400">The best mentors</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-gray-300 aspect-square rounded-lg mb-6"></div>
              <h3 className="text-2xl font-semibold mb-3">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
