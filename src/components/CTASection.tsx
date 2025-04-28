
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-marguru-500 to-marguru-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your AI Assistant Journey Today
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Experience the future of business communications with Marguru's AI assistant. Get started in minutes with our simple setup process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-marguru-900 hover:bg-gray-100 text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6 px-8 rounded-xl">
              Book a Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">Basic Plan</h3>
              <p className="text-3xl font-bold mb-2">$4.99<span className="text-sm font-normal">/mo</span></p>
              <p className="text-sm mb-4">Perfect for individuals and small businesses</p>
              <Button className="w-full bg-white text-marguru-900 hover:bg-gray-100">
                Select Plan
              </Button>
            </div>
            
            <div className="bg-white/10 border-2 border-white backdrop-blur-sm p-5 rounded-xl shadow-glow">
              <h3 className="font-bold text-xl mb-2">Pro Plan</h3>
              <div className="text-3xl font-bold mb-2">$19.99<span className="text-sm font-normal">/mo</span></div>
              <p className="text-sm mb-4">For companies and multiple team members</p>
              <Button className="w-full bg-white text-marguru-900 hover:bg-gray-100">
                Select Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
