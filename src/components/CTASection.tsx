
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Link, Calendar, Users, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const setupSteps = [
  {
    icon: <Link className="h-8 w-8 text-white" />,
    title: "Connect Your Channels",
    description: "Link WhatsApp or Telegram accounts"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Build Knowledge Base",
    description: "We'll learn about your business"
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Setup Integrations",
    description: "Connect your tools and CRM"
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Go Live",
    description: "Your AI assistant is ready"
  }
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-marguru-900 to-marguru-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Follow these simple steps to transform your business communications with Marguru
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {setupSteps.map((step, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-marguru-500 to-marguru-600 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Business Communications?
          </h3>
          <p className="text-lg mb-8 text-gray-300">
            Join thousands of businesses using Marguru to automate customer interactions and deliver exceptional service.
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
