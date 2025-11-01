import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6">
          <button className="text-gray-700 hover:text-gray-900">
            ☰
          </button>
          <nav className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-700 hover:text-blue-600">Our Products</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">Most Popular Downloads</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">Latest Updates</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">Latest News</Link>
          </nav>
        </div>
      </div>
      
      <div className="bg-blue-50 py-3 text-center">
        <p className="text-sm text-gray-700">
          All free downloads. Original files only. Virus checked and safe.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-2">
        <nav className="text-sm text-gray-600">
          <Link href="#" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link href="#" className="hover:text-blue-600">System Utilities</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Blackhole Spliter</span>
        </nav>
      </div>
    </header>
  );
}
