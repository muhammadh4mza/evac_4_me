import React from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SecBakground from "@/assets/hero/sec-hero-background.png";
import { Bell, Map, HeartHandshake, Smartphone, ShieldCheck, Users } from 'lucide-react';

const features = [
  {
    name: "Free real-time disaster alerts",
    description: "Get immediate notifications about emergency situations in your area",
    icon: <Bell className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    iconBg: "bg-[#743d58]",
    iconColor: "text-white"
  },
  {
    name: "Evacuation route guidance",
    description: "Clear, accessible maps showing the safest evacuation paths",
    icon: <Map className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    iconBg: "bg-[#743d58]",
    iconColor: "text-white"
  },
  {
    name: "Smart device integration",
    description: "Works seamlessly with smartphones, tablets, and wearables",
    icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    iconBg: "bg-[#743d58]",
    iconColor: "text-white"
  },
  {
    name: "I'm Safe notification",
    description: "Quickly notify loved ones of your safety status",
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    iconBg: "bg-[#743d58]",
    iconColor: "text-white"
  },
  {
    name: "Accessible interface",
    description: "Designed for users of all ages and abilities",
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    iconBg: "bg-[#743d58]",
    iconColor: "text-white"
  },
  {
    name: "Drive to Safe Point",
    description: "Assistance service for elderly and disabled users",
    icon: <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    iconBg: "bg-[#743d58]",
    iconColor: "text-white"
  }
];

const FeaturesSection = () => {
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
              Key Features
            </h2>
          </div>
          
          <div className="self-center">
            <p className="text-gray-100 text-base sm:text-lg lg:text-xl">
              Evac4Me is specially designed to help everyone evacuate safely during emergencies, with particular attention to the needs of vulnerable populations.
            </p>
          </div>
        </div>
        
        <Separator className="bg-gray-400/50 mb-8 lg:mb-12" />
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="flex flex-col p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`${feature.iconBg} ${feature.iconColor} w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 capitalize mb-2 sm:mb-3">{feature.name}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;