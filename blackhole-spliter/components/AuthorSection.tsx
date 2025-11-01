import React from 'react';
import Link from 'next/link';

export default function AuthorSection() {
  const latestReviews = [
    'Advanced System Optimizer 3.9 Review',
    'File Manager Pro 2.1 - Complete Guide',
    'Network Monitor Plus 4.5 Analysis',
    'Disk Cleaner Ultimate 1.8 Review',
    'Security Suite 2024 - In-Depth Look',
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-3xl">
          👤
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">BORIS WEBER</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Boris Weber is a senior software reviewer at UpdateStar with over 10 years of experience 
            in evaluating and testing software applications. He specializes in system utilities, 
            development tools, and productivity software. His detailed reviews help users make informed 
            decisions about the software they download and use.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-bold text-lg mb-3">LATEST REVIEWS BY BORIS WEBER</h4>
        <div className="space-y-2">
          {latestReviews.map((review, index) => (
            <Link 
              key={index} 
              href="#" 
              className="block text-blue-600 hover:underline text-sm"
            >
              {review}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
