import React from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SecBakground from "@/assets/hero/sec-hero-background.png";
import { CheckCircle, Clock, Zap, Map, Settings, Bell, Users,  Shield, Volume2 } from 'lucide-react';

const roadmapStages = [
  {
    stage: "Stage 1: Current Progress",
    status: "completed",
    icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
    iconBg: "bg-white/80",
    iconColor: "text-[#743d58]",
    features: [
      "Core app design completed",
      "Main navigation finished",
      "Basic safety guidance added",
      "Initial emergency checklist screens ready",
      "Early testing started"
    ]
  },
  {
    stage: "Stage 2: In Development",
    status: "development",
    icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
    iconBg: "bg-white/80",
    iconColor: "text-[#743d58]",
    features: [
      "Real-time map integration",
      "Smart evacuation routes",
      "Improved accessibility settings",
      "Faster notification system",
      "Caregiver connection options"
    ]
  },
  {
    stage: "Stage 3: Coming Soon",
    status: "upcoming",
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />,
    iconBg: "bg-white/80",
    iconColor: "text-[#743d58]",
    features: [
      "Full FEMA integration",
      "Community resource locator",
      "Advanced emergency automations",
      "Voice-guided evacuation",
      "More accessibility tools"
    ]
  }
];

const ApplicationRoadMap = () => {
  return (
    <section 
      id="features" 
      className="py-12 sm:py-16 lg:py-24 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${SecBakground})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
              App Development Roadmap
            </h2>
          </div>
          
          <div className="self-center">
            <p className="text-gray-100 text-base sm:text-lg lg:text-xl">
              Follow our development journey as we build comprehensive emergency evacuation features with a focus on accessibility and real-time assistance.
            </p>
          </div>
        </div>
        
        <Separator className="bg-gray-400/50 mb-8 lg:mb-12" />
        
        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {roadmapStages.map((stage, index) => (
            <Card 
              key={index} 
              className="flex flex-col p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`${stage.iconBg} ${stage.iconColor} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mr-4`}>
                  {stage.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 capitalize">
                  {stage.stage}
                </h3>
              </div>
              
              <ul className="space-y-3 flex-1">
                {stage.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                      stage.status === 'completed' ? 'bg-white' :
                      stage.status === 'development' ? 'bg-white' : 'bg-white'
                    }`} />
                    <span className="text-gray-300 text-sm sm:text-base flex-1">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className={`mt-4 pt-4 border-t border-white/20 text-sm font-medium ${
                stage.status === 'completed' ? 'text-white' :
                stage.status === 'development' ? 'text-white' : 'text-white'
              }`}>
                {stage.status === 'completed' && '✓ Completed'}
                {stage.status === 'development' && '🔄 In Development'}
                {stage.status === 'upcoming' && '⏳ Coming Soon'}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationRoadMap;