
import React from 'react';

const testimonials = [
  {
    quote: "Marguru transformed how I run my salon. The AI assistant handles all my bookings and answers common questions, saving me hours every day.",
    author: "Emma Rodriguez",
    position: "Owner, Style & Shine Hair Salon"
  },
  {
    quote: "As a realtor, I'm always on the go. Having Marguru answer client inquiries and schedule property viewings has increased my response rate and client satisfaction.",
    author: "James Wilson",
    position: "Real Estate Agent"
  },
  {
    quote: "Our small accounting firm was struggling with client communications. Marguru now handles appointment scheduling and basic queries, allowing us to focus on what matters most.",
    author: "Sarah Chen",
    position: "Partner, Chen & Associates Accounting"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Businesses of all sizes are transforming their customer interactions with Marguru.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-marguru-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9.3v9.3c0 1.9-1.5 3.4-3.4 3.4H9.4C7.5 22 6 20.5 6 18.6v-5.3c0-3.7 3-6.7 6.7-6.7h.7c.4 0 .7.3.7.7zm12 0v9.3c0 1.9-1.5 3.4-3.4 3.4h-1.2c-1.9 0-3.4-1.5-3.4-3.4v-5.3c0-3.7 3-6.7 6.7-6.7h.7c.4 0 .7.3.7.7z"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
