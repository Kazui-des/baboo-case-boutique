
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden product-card-shadow hover-float transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-cream-100 text-bamboo-800 text-xs px-3 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
          <Button size="sm" className="bg-forest-500 hover:bg-forest-600 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
