
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CollaborateSection = () => {
  return (
    <section id="collaborate" className="py-20 scrolling-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Collaborate With Us</h2>
          <p className="text-center text-gray-600 mb-12">
            Partner, support, or invest in Evac4Me to help make disaster evacuation safer and more accessible for everyone.
          </p>
          
          <Card className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium">I'm interested in</label>
                <select id="interest" className="w-full p-2 border rounded-md">
                  <option value="">Select an option</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="investment">Investment</option>
                  <option value="support">Support the Project</option>
                  <option value="feedback">Provide Feedback</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us how you'd like to collaborate" rows={4} />
              </div>
              
              <Button type="submit" className="w-full bg-evac-blue hover:bg-blue-700">
                Schedule a Call
              </Button>
            </form>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">Or contact us directly at:</p>
            <a href="mailto:contact@evac4me.com" className="text-evac-blue hover:underline">contact@evac4me.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
