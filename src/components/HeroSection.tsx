
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your AI Business <span className="gradient-text">Assistant</span> for WhatsApp & Telegram
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Transform your business communications with an AI assistant that handles appointments, customer service, accounting, and more - all through messaging apps you already use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary-gradient text-lg py-6 px-8">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                See Demo
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-white rounded-2xl shadow-xl p-4 max-w-md mx-auto animate-float">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-red-500"></div>
              <div className="absolute -top-2 left-6 w-6 h-6 rounded-full bg-yellow-500"></div>
              <div className="absolute -top-2 left-14 w-6 h-6 rounded-full bg-green-500"></div>
              
              <div className="rounded-xl overflow-hidden">
                <div className="bg-marguru-500 text-white p-3">
                  <p className="font-medium">AI Assistant: Marguru</p>
                </div>
                <div className="p-4 bg-gray-100 h-96 overflow-y-auto">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-end">
                      <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                        <p>Hi there! I'd like to book an appointment for a haircut.</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-end">
                      <div className="bg-marguru-500 rounded-lg p-3 text-white max-w-xs shadow-sm">
                        <p>Hello! I'd be happy to help you book an appointment. What day and time works best for you?</p>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                        <p>Does tomorrow at 3 PM work?</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-end">
                      <div className="bg-marguru-500 rounded-lg p-3 text-white max-w-xs shadow-sm">
                        <p>Let me check the schedule... Yes, tomorrow at 3 PM is available! Can I get your name and contact number?</p>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                        <p>John Smith, 555-123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-end">
                      <div className="bg-marguru-500 rounded-lg p-3 text-white max-w-xs shadow-sm">
                        <p>Perfect! I've booked your appointment for tomorrow at 3 PM. You'll receive a confirmation shortly. Is there anything else I can help with?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by businesses of all sizes</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 font-bold text-xl">COMPANY</div>
            <div className="text-gray-400 font-bold text-xl">BRAND</div>
            <div className="text-gray-400 font-bold text-xl">STARTUP</div>
            <div className="text-gray-400 font-bold text-xl">ENTERPRISE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
