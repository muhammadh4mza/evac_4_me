import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Calendar } from 'lucide-react';
import CollaborateBakground from "@/assets/hero/Collaborate-hero-background.png";

const CollaborateSection = () => {
  return (
    <section 
      id="collaborate" 
      className="py-12 sm:py-16 lg:py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${CollaborateBakground})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-gray-900 mb-3 sm:mb-4 capitalize">
              Want to partner, support, or invest in Evac4Me?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in making disaster evacuation safer and more accessible for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <Card className="p-6 sm:p-8 rounded-xl shadow-sm bg-[#f9f2f7]/90 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-gray-900">
                Send us a message
              </h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" placeholder="Your name" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-700">I'm interested in</label>
                    <select 
                      id="interest" 
                      className="w-full p-2 sm:p-3 border rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-[#743d58] focus:border-[#743d58] text-sm sm:text-base"
                    >
                      <option value="">Select an option</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="investment">Investment</option>
                      <option value="support">Support the Project</option>
                      <option value="feedback">Provide Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how you'd like to collaborate" 
                      rows={4} 
                      className="bg-white min-h-[120px]"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-[#743d58] hover:bg-[#5c2f45] text-white">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Options */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="p-6 sm:p-8 rounded-xl shadow-sm bg-[#f9f2f7]/90 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Other ways to connect</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-full bg-[#743d58] text-white flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">Email us</h4>
                      <a 
                        href="mailto:contact@evac4me.com" 
                        className="text-[#743d58] hover:underline text-sm sm:text-base"
                      >
                        contact@evac4me.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-full bg-[#743d58] text-white flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">Call us</h4>
                      <a 
                        href="tel:+1234567890" 
                        className="text-[#743d58] hover:underline text-sm sm:text-base"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 rounded-xl shadow-sm bg-[#f9f2f7]/90 backdrop-blur-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-full bg-[#743d58] text-white flex-shrink-0">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Schedule a call</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                      Book a time to discuss partnership or investment opportunities.
                    </p>
                    <Button className="bg-[#743d58] hover:bg-[#5c2f45] text-white text-sm sm:text-base">
                      Choose a Time
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;