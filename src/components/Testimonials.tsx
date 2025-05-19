
import React from 'react';

const testimonials = [
  {
    quote: "I love how lightweight and durable this case is. The bamboo feels great in hand and has protected my phone through several drops.",
    author: "Sarah J.",
    title: "Verified Buyer"
  },
  {
    quote: "The engraving detail is incredible. I've had so many compliments on my phone case and feel good about using a sustainable product.",
    author: "Mark T.",
    title: "Verified Buyer"
  },
  {
    quote: "Beautiful craftsmanship and excellent customer service. The natural bamboo grain makes each case unique.",
    author: "Priya L.",
    title: "Verified Buyer"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-bamboo-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it. Here's what customers think about our bamboo phone cases.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-bamboo-100"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="mb-4 text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
