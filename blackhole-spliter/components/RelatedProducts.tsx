import React from 'react';
import ProductCard from './ProductCard';

export default function RelatedProducts() {
  const products = [
    {
      title: 'Web Designer Pro 5.0',
      description: 'Professional web design tool with drag-and-drop interface and responsive templates.',
    },
    {
      title: 'Code Editor Plus 3.2',
      description: 'Advanced code editor with syntax highlighting, auto-completion, and debugging tools.',
    },
    {
      title: 'Project Manager Suite 2.8',
      description: 'Comprehensive project management solution for development teams of all sizes.',
    },
    {
      title: 'Performance Analyzer 4.1',
      description: 'Monitor and optimize your web application performance with detailed analytics.',
    },
    {
      title: 'Version Control Pro 6.5',
      description: 'Powerful version control system with advanced branching and merging capabilities.',
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold">RELATED</h2>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
