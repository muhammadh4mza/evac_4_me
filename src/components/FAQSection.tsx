
import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Minus, Plus } from "lucide-react";

const bootcampFaqs = [
  {
    question: "Who is suitable for bootcamp?",
    answer: "Bootcamp is suitable for people who want to acquire specific skills with limited time. Anyone looking to improve their technical skills or learn new skills, such as programming or web design, will find this program useful."
  },
  {
    question: "How long will it take to complete bootcamp?",
    answer: "Our bootcamp programs range from 8 to 16 weeks, depending on the intensity and specific track you choose. Full-time programs typically take 12 weeks, while part-time options can extend to 16 weeks to accommodate those with other commitments."
  },
  {
    question: "How much does it cost to join a bootcamp?",
    answer: "The cost of our bootcamps varies based on the program length and specialization. Prices typically range from $8,000 to $15,000, with various financing options, scholarships, and income share agreements available to make it accessible."
  },
  {
    question: "Are there any special requirements to join the bootcamp?",
    answer: "While no formal technical qualifications are required, we do recommend completing our free prep course before starting. Applicants should have basic computer literacy, problem-solving abilities, and strong motivation to learn intensively."
  },
  {
    question: "What is covered in the bootcamp?",
    answer: "Our bootcamp curriculum covers both technical skills and professional development. Technical topics include programming fundamentals, web development technologies, data structures, and project work. Professional development covers job search strategies, interview preparation, and portfolio building."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-black text-white scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {bootcampFaqs.map((faq, index) => (
            <Collapsible key={index} className="border border-zinc-800 rounded-3xl overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-xl md:text-2xl font-medium text-left">
                {faq.question}
                <div className="flex items-center justify-center h-8 w-8">
                  <Plus className="h-5 w-5 block collapsible-plus" />
                  <Minus className="h-5 w-5 hidden collapsible-minus" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 text-zinc-300">
                <p>{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
