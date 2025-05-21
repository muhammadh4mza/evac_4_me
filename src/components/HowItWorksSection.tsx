import React from 'react';
import { Card } from "@/components/ui/card";
import {
  UserCheck,
  BookOpen,
  Laptop,
  Users,
  Briefcase,
  Award
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Application",
    description: "Submit your application and take our simple assessment",
    icon: <UserCheck className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Onboarding",
    description: "Get oriented with our learning platform and meet your cohort",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "Learning Phase",
    description: "Hands-on training with industry experts and projects",
    icon: <Laptop className="w-5 h-5" />,
    color: "bg-amber-100 text-amber-600"
  },
  {
    id: 4,
    title: "Collaboration",
    description: "Work in teams on real-world case studies",
    icon: <Users className="w-5 h-5" />,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    id: 5,
    title: "Career Prep",
    description: "Resume workshops, mock interviews, and networking",
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-rose-100 text-rose-600"
  },
  {
    id: 6,
    title: "Graduation",
    description: "Showcase your portfolio and receive certification",
    icon: <Award className="w-5 h-5" />,
    color: "bg-indigo-100 text-indigo-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-[#f9f2f7] min-h-[600px] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Our Proven 6-Step Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From beginner to job-ready professional in weeks
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-1/4 right-1/4 top-1/2 h-1.5 bg-gray-200/80 -translate-y-1/2"></div>
            
            <div className="relative grid grid-cols-6 gap-4">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4 transition-all hover:scale-110`}>
                    {step.icon}
                  </div>
                  <div className="text-center px-2">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{step.title}</h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-tight">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Tablet (2 columns) */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step) => (
              <Card key={step.id} className="p-5 rounded-lg border border-gray-200/50 hover:border-gray-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${step.color} flex items-center justify-center mt-1`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{step.title}</h3>
                    <p className="text-gray-600 mt-1 text-xs lg:text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="sm:hidden space-y-4">
          {steps.map((step) => (
            <Card key={step.id} className="p-4 rounded-lg border border-gray-200/50 hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${step.color} flex items-center justify-center mt-0.5`}>
                  {React.cloneElement(step.icon, { className: "w-4 h-4" })}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{step.title}</h3>
                  <p className="text-gray-600 mt-1 text-xs">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;