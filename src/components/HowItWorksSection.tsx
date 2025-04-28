
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: "01",
    icon: <Link className="h-8 w-8" />,
    title: "Connect Your Channels",
    description: "Connect your business channels in minutes. Link WhatsApp Business, Telegram, or any messaging platform."
  },
  {
    number: "02",
    icon: <Users className="h-8 w-8" />,
    title: "Train Your Assistant",
    description: "Upload your business materials or let us scan your website to create a custom knowledge base."
  },
  {
    number: "03",
    icon: <Calendar className="h-8 w-8" />,
    title: "Setup & Integrate",
    description: "Connect your business tools - calendar, CRM, booking systems - for seamless automation."
  },
  {
    number: "04",
    icon: <ArrowRight className="h-8 w-8" />,
    title: "Go Live",
    description: "Launch your AI assistant and let it handle customer interactions 24/7."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-marguru-600/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            How Marguru Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get started with your AI assistant in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="group relative bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-marguru-500 to-marguru-600 flex items-center justify-center">
                    {React.cloneElement(step.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-marguru-400">Step {step.number}</span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Ready to Transform Your Business?</h3>
                <p className="text-gray-300">
                  Join thousands of businesses using Marguru to automate customer interactions and deliver exceptional service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-marguru-500 hover:bg-marguru-600 text-white">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/5 hover:bg-white/20 transition-all cursor-pointer">
                  <span className="font-medium text-white">WhatsApp Business</span>
                  <Button size="sm" className="bg-marguru-500 hover:bg-marguru-600">Connect</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/5 hover:bg-white/20 transition-all cursor-pointer">
                  <span className="font-medium text-white">Google Calendar</span>
                  <Button size="sm" className="bg-marguru-500 hover:bg-marguru-600">Connect</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/5 hover:bg-white/20 transition-all cursor-pointer">
                  <span className="font-medium text-white">CRM Integration</span>
                  <Button size="sm" className="bg-marguru-500 hover:bg-marguru-600">Connect</Button>
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
