
import React from 'react';
import { ArrowRight, Link, Calendar, Users } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Link className="h-6 w-6 text-marguru-500" />,
    title: "Connect Your Platforms",
    description: "Link your WhatsApp Business or Telegram account with Marguru and provide your website/social media links for initial data collection."
  },
  {
    number: "02",
    icon: <Users className="h-6 w-6 text-marguru-500" />,
    title: "Build Your Knowledge Base",
    description: "Answer a few questions about your business and services. Upload materials or let us scan your online presence."
  },
  {
    number: "03",
    icon: <Calendar className="h-6 w-6 text-marguru-500" />,
    title: "Connect Your Tools",
    description: "Integrate with Google Calendar, your CRM, booking systems, and other business tools you already use."
  },
  {
    number: "04",
    icon: <ArrowRight className="h-6 w-6 text-marguru-500" />,
    title: "Go Live",
    description: "Your AI assistant is ready to start handling customer interactions, bookings, and inquiries 24/7."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">Marguru</span> Works
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Getting started with your AI assistant is simple. Follow these steps to transform your business communications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-marguru-50 rounded-2xl p-8 lg:p-10 order-2 md:order-1">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xl font-bold text-marguru-600">{step.number}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {step.icon}
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-gray-100 rounded-lg p-5 mb-6">
                <h3 className="text-xl font-bold mb-4">Setup Wizard</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input type="text" className="w-full rounded border-gray-300 shadow-sm p-2" value="Stellar Hair Studio" disabled />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website or Social Media URL</label>
                    <input type="text" className="w-full rounded border-gray-300 shadow-sm p-2" placeholder="https://your-business.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                    <select className="w-full rounded border-gray-300 shadow-sm p-2">
                      <option>Hair Salon</option>
                      <option>Real Estate Agency</option>
                      <option>Restaurant</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-5">
                <h3 className="text-xl font-bold mb-4">Integrations</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">WhatsApp Business</span>
                    <button className="text-sm text-marguru-600 font-medium">Connect</button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">Google Calendar</span>
                    <button className="text-sm text-marguru-600 font-medium">Connect</button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">Google Contacts</span>
                    <button className="text-sm text-marguru-600 font-medium">Connect</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
