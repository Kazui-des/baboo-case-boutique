
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cream-100 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10 -z-10"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            Sustainable <span className="text-bamboo-600">Bamboo</span> Phone Cases
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Protect your phone with our eco-friendly bamboo cases. 
            Handcrafted from sustainable materials for the environmentally conscious.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-bamboo-500 hover:bg-bamboo-600 text-white">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="border-bamboo-300">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-cream-200"></div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">500+</span> happy customers
            </p>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bamboo-200 rounded-full -z-10 opacity-70 animate-float"></div>
          <img 
            src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Bamboo phone case" 
            className="rounded-2xl shadow-lg max-w-md mx-auto relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
