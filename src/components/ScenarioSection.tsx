import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bell, ShieldCheck, Users } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: "Disaster Alert Received",
    description: "Evac4Me sends an immediate alert with clear information about the emergency situation, helping users stay informed.",
    icon: <Bell className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#743d58]" />
  },
  {
    id: 2,
    title: "Safe Zone Reached",
    description: "Once the user reaches a designated safe zone, the app confirms their arrival and provides additional safety information.",
    icon: <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#743d58]" />
  },
  {
    id: 3,
    title: "Family Notified",
    description: "With a single tap of the I'm Safe button, loved ones receive notifications about the user's safety and location.",
    icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#743d58]" />
  }
];

const ScenarioSection = () => {
  const scenarioRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    scenarioRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="scenarios" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24  text-gray-900 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0h50v50H50V0zm0 50h50v50H50V50zM0 50h50v50H0V50zM0 0h50v50H0V0z' fill='%23743d58' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px"
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-semibold text-center mb-12 sm:mb-16 pb-4 border-b border-[#743d58]/20">
          How Evac4Me Works During An Emergency
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {scenarios.map((scenario, index) => (
            <Card 
              key={scenario.id}
              ref={el => scenarioRefs.current[index] = el}
              className="flex flex-col items-start text-left p-6 sm:p-8 bg-white/80 backdrop-blur-sm border border-[#743d58]/10 hover:border-[#743d58]/30 transition-all duration-300 hover:shadow-lg opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#743d58]/10 flex items-center justify-center mb-6">
                {scenario.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">
                {scenario.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {scenario.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ScenarioSection;