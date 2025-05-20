
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will the Evac4Me app be available?",
    answer: "The Evac4Me app is currently in development and we're planning to launch a beta version in the coming months. Sign up for our newsletter to be notified when it's available."
  },
  {
    question: "Is Evac4Me free to use?",
    answer: "Yes, the core features of Evac4Me including emergency alerts, evacuation routes, and the 'I'm Safe' notification will be completely free. We believe safety information should be accessible to everyone."
  },
  {
    question: "How does Evac4Me help elderly or disabled users?",
    answer: "Evac4Me features a special 'Drive to Safe Point' function that connects vulnerable users with nearby assistance. The app is also designed with extra-large buttons, simple navigation, and voice guidance to ensure accessibility for all users."
  },
  {
    question: "What types of emergencies does the app cover?",
    answer: "Evac4Me will provide alerts and evacuation guidance for natural disasters (wildfires, floods, hurricanes, earthquakes) and manmade emergencies (chemical spills, major accidents) based on official emergency management data."
  },
  {
    question: "How does the app determine safe evacuation routes?",
    answer: "The app uses real-time emergency data, traffic information, and designated safe zones from local emergency management agencies to calculate the safest routes away from danger areas."
  },
  {
    question: "Will Evac4Me work without internet access?",
    answer: "Evac4Me will include offline capabilities that store your local area map and basic evacuation routes. While real-time updates require connectivity, the core navigation features will work offline."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50 scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about the Evac4Me app and how it works.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
