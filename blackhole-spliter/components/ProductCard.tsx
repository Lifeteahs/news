import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  href?: string;
}

export default function ProductCard({ title, description, href = '#' }: ProductCardProps) {
  return (
    <Link href={href} className="block p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
      <h3 className="font-bold text-blue-600 hover:underline mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </Link>
  );
}
