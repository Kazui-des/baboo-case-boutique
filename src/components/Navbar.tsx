
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-bamboo-600">EcoBamboo</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-bamboo-600 transition-colors">
            Home
          </Link>
          <a href="#products" className="text-foreground hover:text-bamboo-600 transition-colors">
            Products
          </a>
          <a href="#about" className="text-foreground hover:text-bamboo-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-bamboo-600 transition-colors">
            Contact
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-forest-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button className="bg-bamboo-500 hover:bg-bamboo-600 text-white hidden md:flex">
            Shop Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
