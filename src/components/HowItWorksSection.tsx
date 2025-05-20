
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Download the App",
    description: "Get Evac4Me from your app store. Set up your profile and add emergency contacts.",
    color: "bg-evac-blue"
  },
  {
    number: "02",
    title: "Set Your Location",
    description: "Allow the app to access your location or set your home address for accurate alerts.",
    color: "bg-evac-orange"
  },
  {
    number: "03",
    title: "Receive Alerts",
    description: "When a disaster occurs, you'll get immediate notifications with critical information.",
    color: "bg-red-500"
  },
  {
    number: "04",
    title: "Follow Evacuation Routes",
    description: "The app will show you the safest paths to the nearest designated safe zones.",
    color: "bg-evac-blue"
  },
  {
    number: "05",
    title: "Reach Safety",
    description: "Once you arrive at a safe location, the app confirms you've reached a secure area.",
    color: "bg-evac-green"
  },
  {
    number: "06",
    title: "Notify Loved Ones",
    description: "Tap the \"I'm Safe\" button to automatically alert your emergency contacts.",
    color: "bg-evac-orange"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Evac4Me makes emergency evacuation simple and accessible for everyone.
        </p>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className={`hidden md:block absolute top-6 ${index % 2 === 0 ? 'right-1/2 -mr-3' : 'left-1/2 -ml-3'} w-6 h-6 ${step.color} rounded-full border-4 border-white`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
