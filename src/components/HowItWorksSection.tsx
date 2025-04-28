
import React from 'react';
import { Link, Users, Calendar, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Link className="h-8 w-8 text-white" />,
    title: "Connect Your Channels",
    description: "Link your WhatsApp Business or Telegram account with Marguru and provide your website/social media links for initial data collection."
  },
  {
    number: "02",
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Build Knowledge Base",
    description: "Answer questions about your business and services. Upload materials or let us scan your online presence to train your AI assistant."
  },
  {
    number: "03",
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Setup Integrations",
    description: "Connect with Google Calendar, your CRM, booking systems, and other business tools you already use for seamless operations."
  },
  {
    number: "04",
    icon: <ArrowRight className="h-8 w-8 text-white" />,
    title: "Go Live",
    description: "Your AI assistant is ready to start handling customer interactions, bookings, and inquiries 24/7 with no supervision needed."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-marguru-900 to-marguru-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-marguru-300">Marguru</span> Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Getting started with your AI assistant is simple. Follow these steps to transform your business communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-marguru-500 to-marguru-600 flex items-center justify-center shadow-glow">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-marguru-300 mr-1">{step.number}</span>
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-10">
          <div className="order-2 md:order-1">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-marguru-300">Setup Wizard</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                  <input 
                    type="text" 
                    className="w-full rounded-lg bg-white/10 border-white/20 text-white shadow-sm p-3 focus:ring-2 focus:ring-marguru-500 focus:border-transparent" 
                    value="Stellar Hair Studio" 
                    readOnly 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Website or Social Media URL</label>
                  <input 
                    type="text" 
                    className="w-full rounded-lg bg-white/10 border-white/20 text-white shadow-sm p-3 focus:ring-2 focus:ring-marguru-500 focus:border-transparent" 
                    placeholder="https://your-business.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Type</label>
                  <select className="w-full rounded-lg bg-white/10 border-white/20 text-white shadow-sm p-3 focus:ring-2 focus:ring-marguru-500 focus:border-transparent">
                    <option>Hair Salon</option>
                    <option>Real Estate Agency</option>
                    <option>Restaurant</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-marguru-300">Integrations</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/10 hover:bg-white/15 transition-all">
                  <span className="font-medium text-white">WhatsApp Business</span>
                  <button className="px-4 py-2 bg-marguru-500 hover:bg-marguru-600 transition-colors rounded-lg text-white text-sm font-medium">Connect</button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/10 hover:bg-white/15 transition-all">
                  <span className="font-medium text-white">Google Calendar</span>
                  <button className="px-4 py-2 bg-marguru-500 hover:bg-marguru-600 transition-colors rounded-lg text-white text-sm font-medium">Connect</button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/10 hover:bg-white/15 transition-all">
                  <span className="font-medium text-white">Google Contacts</span>
                  <button className="px-4 py-2 bg-marguru-500 hover:bg-marguru-600 transition-colors rounded-lg text-white text-sm font-medium">Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Business Communications?
          </h3>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses using Marguru to automate customer interactions and deliver exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-marguru-900 hover:bg-gray-100 text-lg py-4 px-8 rounded-xl font-medium flex items-center justify-center transition-all shadow-glow hover:shadow-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="text-white border-2 border-white hover:bg-white/10 text-lg py-4 px-8 rounded-xl font-medium flex items-center justify-center transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
