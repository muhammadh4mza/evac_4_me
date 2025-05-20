
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

const scenarios = [
  {
    id: 1,
    title: "Emergency Alert",
    description: "Evac4Me detects a nearby disaster and instantly alerts you with critical information.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    )
  },
  {
    id: 2,
    title: "Evacuation Routes",
    description: "The app instantly displays the safest evacuation routes based on real-time data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-evac-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Safe Zone Arrival",
    description: "Evac4Me guides you to safety and confirms when you've reached a designated safe zone.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-evac-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    id: 4,
    title: "Family Notification",
    description: "With one tap of the \"I'm Safe\" button, alert your loved ones of your status and location.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-evac-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: "Smart Home Integration",
    description: "Optional connectivity with smart devices to shut off utilities and enhance safety.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12.5V2.5l10 5v10l-10 5v-10"></path>
        <path d="M12 12.5V2.5l10 5v10l-10 5v-10"></path>
      </svg>
    )
  }
];

const ScenarioSection = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scenarioRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    scenarioRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="scenarios" className="py-20 bg-gray-50 scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Evac4Me Works in an Emergency</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          See how Evac4Me can help you and your family stay safe during disasters with real-time alerts and guidance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div 
              key={scenario.id}
              className="scenario-item"
              ref={el => scenarioRefs.current[index] = el}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full flex flex-col p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{scenario.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
                <p className="text-gray-600">{scenario.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
