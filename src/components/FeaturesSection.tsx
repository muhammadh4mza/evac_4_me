
import React from 'react';
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-evac-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Free Real-Time Disaster Alerts",
    description: "Receive immediate notifications about emergencies in your area, without any subscription fees."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-evac-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Evacuation Route Guidance",
    description: "Get clear, easy-to-follow directions to the nearest safe zones, avoiding danger areas."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-evac-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
        <path d="M3 12h1m8-9v1m8 8h1m-15.4 2.6 .7.7m12.1-.7-.7.7" />
        <rect width="16" height="6" x="4" y="16" rx="2" />
      </svg>
    ),
    title: "\"Drive to Safe Point\" for Vulnerable Users",
    description: "Special feature to help elderly and disabled users by connecting them with nearby assistance."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-evac-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: "\"I'm Safe\" Button",
    description: "Instantly notify your family members of your status and location once you reach safety."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-evac-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
    title: "Accessible Interface",
    description: "User-friendly design with large buttons, simple navigation, and voice guidance for all users."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-evac-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Inclusive Design",
    description: "Specially designed for children, elderly, and intellectually disabled users with simplified interactions."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Evac4Me is designed with accessibility and simplicity at its core, ensuring everyone can use it in emergency situations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-white rounded-full shadow-sm">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
