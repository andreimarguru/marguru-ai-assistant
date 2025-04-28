
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: "Basic",
    price: "$4.99",
    period: "per month",
    description: "Perfect for individual professionals and small businesses",
    features: [
      "WhatsApp or Telegram integration",
      "Custom knowledge base",
      "Appointment scheduling",
      "Google Calendar integration",
      "Up to 500 interactions per month",
      "1 connected platform"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$19.99",
    period: "per month",
    description: "Ideal for growing businesses with multiple staff members",
    features: [
      "All Basic features",
      "Multiple staff calendars",
      "CRM integrations",
      "Advanced analytics dashboard",
      "Up to 2,000 interactions per month",
      "Priority support",
      "3 connected platforms"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Business",
    price: "$49.99",
    period: "per month",
    description: "For established businesses and companies",
    features: [
      "All Pro features",
      "White-labeled assistant",
      "Custom integrations",
      "Team collaboration tools",
      "Unlimited interactions",
      "Dedicated account manager",
      "Unlimited connected platforms"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the plan that works best for your business needs. All plans include core AI assistant features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden ${
                tier.popular 
                  ? 'ring-2 ring-marguru-500 transform md:-translate-y-4 relative z-10 bg-white shadow-xl' 
                  : 'bg-white shadow-lg'
              }`}
            >
              {tier.popular && (
                <div className="bg-marguru-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-600 ml-1">{tier.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 ${tier.popular ? 'btn-primary-gradient' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom solution? <a href="#" className="text-marguru-600 font-medium">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
