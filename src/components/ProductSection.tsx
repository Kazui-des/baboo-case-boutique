
import React, { useState } from 'react';
import ProductCard, { ProductProps } from './ProductCard';
import { Button } from '@/components/ui/button';

const phoneModels = ['iPhone 15', 'iPhone 14', 'Samsung S23', 'Google Pixel 8', 'All Models'];

const products: ProductProps[] = [
  {
    id: 1,
    name: "Natural Bamboo Case",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Handcrafted from natural bamboo with a smooth finish and precise cutouts.",
    category: "Minimalist"
  },
  {
    id: 2,
    name: "Engraved Mandala",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Bamboo case with intricate mandala pattern laser-engraved on the back.",
    category: "Artistic"
  },
  {
    id: 3,
    name: "Mountain Range",
    price: 32.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Featuring a beautiful mountain landscape engraving on genuine bamboo.",
    category: "Nature"
  },
  {
    id: 4,
    name: "Wave Pattern",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Elegant wave pattern design on sustainably sourced bamboo.",
    category: "Minimalist"
  },
  {
    id: 5,
    name: "Bamboo & Resin",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Unique combination of bamboo and colored resin for a stunning abstract look.",
    category: "Artistic"
  },
  {
    id: 6,
    name: "Geometric Pattern",
    price: 31.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Modern geometric patterns precision-carved into natural bamboo.",
    category: "Geometric"
  }
];

const ProductSection: React.FC = () => {
  const [activeModel, setActiveModel] = useState('All Models');

  return (
    <section className="py-16" id="products">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collection</h2>
          <p className="text-muted-foreground text-lg">
            Explore our range of handcrafted bamboo phone cases, each uniquely designed to bring natural elegance to your device.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {phoneModels.map((model) => (
            <Button 
              key={model} 
              variant={activeModel === model ? "default" : "outline"} 
              onClick={() => setActiveModel(model)}
              className={activeModel === model ? "bg-bamboo-500 hover:bg-bamboo-600" : "border-bamboo-200"}
            >
              {model}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-bamboo-300">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
