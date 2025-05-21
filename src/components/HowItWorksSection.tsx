
import React from 'react';
import { Card } from "@/components/ui/card";

// Testimonial data
const testimonials = [
  {
    name: "Melvin",
    position: "CEO Tokpet",
    content: "I never thought that I would have the technical skills that I have now. Thanks to this bootcamp program which gave me the opportunity to learn from industry experts and prepared me for an amazing new career.",
    isDark: false
  },
  {
    name: "Jarwo Sutejo",
    position: "CEO Tokpet",
    content: "I learned a lot about how to work in a team and face challenges in this bootcamp program. My study experience here has helped me broaden my professional network and prepared me for a career in technology.",
    isDark: true
  },
  {
    name: "Melvin",
    position: "CEO Tokpet",
    content: "I am happy to have joined this bootcamp program. Besides gaining technical knowledge, I also learned a lot about teamwork and how to work in a productive work environment. I feel more confident and ready to face future challenges.",
    isDark: false
  },
  {
    name: "Melvin",
    position: "CEO Tokpet",
    content: "I am very impressed with the quality of the instructors in this bootcamp program. They really mastered the material and provided me with a lot of valuable insights. I recommend this program to anyone looking to start a career in the technology industry.",
    isDark: false
  },
  {
    name: "Melvin",
    position: "CEO Tokpet",
    content: "I love how well designed this bootcamp program is. They provide clear and in-depth explanations of the topics being taught, and allow me to study in a very practical way. I feel I have learned a lot in such a short time.",
    isDark: false
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 hexagon-gradient scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 leading-tight">
          Said those who joined our<br />bootcamp program
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row - 2 cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className={`p-8 rounded-3xl ${testimonials[0].isDark ? 'dark-hexagon-gradient text-white' : 'bg-white/80'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonials[0].name}</h4>
                    <p className={`text-sm ${testimonials[0].isDark ? 'text-gray-300' : 'text-gray-600'}`}>{testimonials[0].position}</p>
                  </div>
                </div>
                <p className={testimonials[0].isDark ? 'text-gray-100' : 'text-gray-700'}>{testimonials[0].content}</p>
              </Card>
              
              <Card className={`p-8 rounded-3xl ${testimonials[1].isDark ? 'dark-hexagon-gradient text-white' : 'bg-white/80'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonials[1].name}</h4>
                    <p className={`text-sm ${testimonials[1].isDark ? 'text-gray-300' : 'text-gray-600'}`}>{testimonials[1].position}</p>
                  </div>
                </div>
                <p className={testimonials[1].isDark ? 'text-gray-100' : 'text-gray-700'}>{testimonials[1].content}</p>
              </Card>
            </div>
          </div>
          
          {/* Second row - 3 cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.slice(2).map((testimonial, index) => (
                <Card key={index} className={`p-8 rounded-3xl ${testimonial.isDark ? 'dark-hexagon-gradient text-white' : 'bg-white/80'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className={`text-sm ${testimonial.isDark ? 'text-gray-300' : 'text-gray-600'}`}>{testimonial.position}</p>
                    </div>
                  </div>
                  <p className={testimonial.isDark ? 'text-gray-100' : 'text-gray-700'}>{testimonial.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
