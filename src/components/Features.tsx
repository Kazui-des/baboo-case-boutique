
import React from 'react';
import { Package, Leaf, Recycle } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-forest-500" />,
    title: "Eco-Friendly",
    description: "Made from sustainable bamboo, a rapidly renewable resource that grows without pesticides or fertilizers."
  },
  {
    icon: <Package className="h-8 w-8 text-forest-500" />,
    title: "Durable Protection",
    description: "Strong and lightweight, our bamboo cases provide excellent protection against drops and impacts."
  },
  {
    icon: <Recycle className="h-8 w-8 text-forest-500" />,
    title: "Biodegradable",
    description: "Unlike plastic cases, our bamboo cases are biodegradable and won't sit in landfills for centuries."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-cream-50" id="about">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bamboo?</h2>
          <p className="text-muted-foreground text-lg">Our sustainable approach puts the planet first without compromising on quality or style.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-bamboo-100 hover-float transition-all duration-300"
            >
              <div className="bg-cream-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
