
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
              <Button className="bg-gradient-to-r from-marguru-500 to-marguru-600 hover:from-marguru-600 hover:to-marguru-700 text-white text-lg py-6 px-8">
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
              <div className="h-12 bg-gradient-to-r from-marguru-500 to-marguru-600 rounded-t-lg flex items-center px-4 -mt-4 -mx-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Marguru Assistant</p>
                    <p className="text-white/70 text-sm">Online</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 h-96 overflow-y-auto rounded-b-lg -mx-4 -mb-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-end">
                    <div className="bg-white rounded-2xl p-3 max-w-xs shadow-sm">
                      <p>Hi there! I'd like to book an appointment for a haircut.</p>
                    </div>
                  </div>
                  <div className="flex items-end justify-end">
                    <div className="bg-gradient-to-r from-marguru-500 to-marguru-600 rounded-2xl p-3 text-white max-w-xs shadow-sm">
                      <p>Hello! I'd be happy to help you book an appointment. What day and time works best for you?</p>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <div className="bg-white rounded-2xl p-3 max-w-xs shadow-sm">
                      <p>Does tomorrow at 3 PM work?</p>
                    </div>
                  </div>
                  <div className="flex items-end justify-end">
                    <div className="bg-gradient-to-r from-marguru-500 to-marguru-600 rounded-2xl p-3 text-white max-w-xs shadow-sm">
                      <p>Let me check the schedule... Yes, tomorrow at 3 PM is available! Can I get your name and contact number?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by businesses worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-marguru-600 font-bold text-xl">COMPANY</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-marguru-600 font-bold text-xl">BRAND</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-marguru-600 font-bold text-xl">STARTUP</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-marguru-600 font-bold text-xl">ENTERPRISE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
