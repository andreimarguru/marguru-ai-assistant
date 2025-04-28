
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-marguru-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Join thousands of businesses using Marguru to automate customer interactions, save time, and deliver exceptional service - all through the messaging apps your customers already use.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-marguru-900 hover:bg-gray-100 text-lg py-6 px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6 px-8">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
