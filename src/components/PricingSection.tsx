import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Bell,
  ListChecks,
  Clock,
  Shield,
  Heart,
  Brain,
  Sparkles,
  Star
} from 'lucide-react';

const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$2.99/month",
    yearlyPrice: "$30/year (auto-renews)",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-[#743d58] text-white",
    features: [
      "Alerts & notifications",
      "Emergency checklists",
      "Medication reminders",
      "Daily safety tasks",
      "Basic evacuation support"
    ],
    popular: false
  },
  {
    id: 2,
    title: "Premium Plan",
    subtitle: "Mood Mirror + Tree Talk",
    price: "$3.99/month",
    yearlyPrice: "",
    icon: <Heart className="w-5 h-5" />,
    color: "bg-[#f9f2f7] text-[#743d58]",
    features: [
      "Emotional check-ins",
      "AI mental wellness support",
      "Calming tools during stressful events",
      "All Basic Plan features included"
    ],
    popular: true
  }
];

const HowItWorksSection = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-[#f9f2f7] min-h-[600px] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Affordable & Accessible
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Choose the plan that fits your safety and wellness needs
          </p>
        </div>

        {/* Pricing Cards - Desktop */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative p-8 rounded-2xl border-2 transition-all hover:scale-105 ${
                    plan.popular 
                      ? 'border-[#743d58] bg-white shadow-xl' 
                      : 'border-gray-200/50 bg-white'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#743d58] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full ${plan.color} flex items-center justify-center mx-auto mb-4 transition-all hover:scale-110`}>
                      {plan.icon}
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-2">{plan.title}</h3>
                    {plan.subtitle && (
                      <p className="text-[#743d58] font-semibold mb-2">{plan.subtitle}</p>
                    )}
                    <div className="space-y-1">
                      <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                      {plan.yearlyPrice && (
                        <p className="text-gray-600 text-sm">{plan.yearlyPrice}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-center mb-4">Includes:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className={`w-6 h-6 rounded-full ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[#743d58] text-white hover:bg-[#5a2f45]'
                      : 'bg-[#743d58] text-white hover:bg-blue-700'
                  }`}>
                    Get Started
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards - Tablet (stacked) */}
        <div className="hidden sm:block md:hidden">
          <div className="grid gap-6 max-w-2xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative p-6 rounded-xl border-2 transition-all ${
                  plan.popular 
                    ? 'border-[#743d58] bg-white shadow-lg' 
                    : 'border-gray-200/50 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#743d58] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${plan.color} flex items-center justify-center mt-1`}>
                    {plan.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-gray-900">{plan.title}</h3>
                      {plan.subtitle && (
                        <p className="text-[#743d58] font-semibold text-sm">{plan.subtitle}</p>
                      )}
                      <div className="mt-2">
                        <p className="text-2xl font-bold text-gray-900">{plan.price}</p>
                        {plan.yearlyPrice && (
                          <p className="text-gray-600 text-sm">{plan.yearlyPrice}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Includes:</h4>
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full ${plan.color} flex items-center justify-center flex-shrink-0`}>
                            <Sparkles className="w-2 h-2" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                      plan.popular
                        ? 'bg-[#743d58] text-white hover:bg-[#5a2f45]'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Cards - Mobile */}
        <div className="sm:hidden space-y-4">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative p-4 rounded-lg border-2 ${
                plan.popular 
                  ? 'border-[#743d58] bg-white shadow-md' 
                  : 'border-gray-200/50 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#743d58] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                </div>
              )}
              
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${plan.color} flex items-center justify-center mt-0.5`}>
                  {React.cloneElement(plan.icon, { className: "w-4 h-4" })}
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="font-bold text-lg text-gray-900">{plan.title}</h3>
                    {plan.subtitle && (
                      <p className="text-[#743d58] font-semibold text-xs">{plan.subtitle}</p>
                    )}
                    <div className="mt-1">
                      <p className="text-xl font-bold text-gray-900">{plan.price}</p>
                      {plan.yearlyPrice && (
                        <p className="text-gray-600 text-xs">{plan.yearlyPrice}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900 text-xs">Includes:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Sparkles className="w-2 h-2" />
                        </div>
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full mt-3 py-2 px-3 rounded-lg font-semibold text-xs transition-all ${
                    plan.popular
                      ? 'bg-[#743d58] text-white hover:bg-[#5a2f45]'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    Get Started
                  </button>
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