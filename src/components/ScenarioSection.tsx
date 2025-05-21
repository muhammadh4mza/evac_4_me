
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const scenarios = [
  {
    id: 1,
    title: "Emergency Alert",
    description: "Evac4Me detects a nearby disaster and instantly alerts you with critical information.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Teaching Method Used",
    description: "Our expert instructors use hands-on, practical approaches to ensure you master every skill.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
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
    <section id="scenarios" className="py-24 bg-gradient-to-br from-purple-900 to-pink-600 text-white scrolling-section relative">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0h50v50H50V0zm0 50h50v50H50V50zM0 50h50v50H0V50zM0 0h50v50H0V0z' fill='%23ffffff' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px"
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-16 pb-4 border-b border-white/20 text-white">
          Gain an In-Depth<br/>Understanding of Our<br/>Bootcamp Program
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {scenarios.map((scenario, index) => (
            <div 
              key={scenario.id}
              className="scenario-item flex flex-col items-start text-left"
              ref={el => scenarioRefs.current[index] = el}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{scenario.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{scenario.title}</h3>
              <p className="text-gray-200">{scenario.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
