
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-bamboo-600 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Sustainable Movement</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            For every case purchased, we plant a bamboo tree. Help us make a positive impact on the environment with your purchase.
          </p>
          <Button size="lg" className="bg-white text-bamboo-600 hover:bg-cream-100">
            Shop Now and Make a Difference
          </Button>
          <div className="mt-8 flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold">5,000+</p>
              <p className="text-sm opacity-80">Trees Planted</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">10,000+</p>
              <p className="text-sm opacity-80">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">3+</p>
              <p className="text-sm opacity-80">Tons of Plastic Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
