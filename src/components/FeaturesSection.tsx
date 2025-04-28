
import React from 'react';
import { Calendar, MessageSquare, Inbox, Users, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-marguru-500" />,
    title: "Smart Appointment Booking",
    description: "Automatically handle appointment scheduling, changes, and cancellations through WhatsApp or Telegram."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-marguru-500" />,
    title: "AI-Powered Customer Service",
    description: "Answer customer questions 24/7 using your custom knowledge base and business information."
  },
  {
    icon: <Inbox className="h-8 w-8 text-marguru-500" />,
    title: "Seamless Integrations",
    description: "Connect with your existing tools: CRM, Google Calendar, Sheets, and more to keep everything in sync."
  },
  {
    icon: <Users className="h-8 w-8 text-marguru-500" />,
    title: "Custom Knowledge Base",
    description: "Train your AI assistant with information from your website, social media, and business documents."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-marguru-500" />,
    title: "Business Analytics",
    description: "Get insights on customer interactions, popular questions, and business opportunities."
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All-in-One Business <span className="gradient-text">Assistant</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Marguru combines AI technology with your business tools to provide a seamless experience for you and your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 bg-marguru-50 w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
