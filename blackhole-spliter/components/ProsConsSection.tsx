import React from 'react';

export default function ProsConsSection() {
  const pros = [
    'Intuitive and user-friendly interface',
    'Comprehensive feature set for web development',
    'Excellent performance and stability',
    'Regular updates and active development',
    'Strong community support and documentation',
  ];

  const cons = [
    'Learning curve for advanced features',
    'Limited mobile app functionality',
    'Some features require internet connection',
    'Resource-intensive for older systems',
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-700">PROS</h3>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-700">CONS</h3>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                <span className="text-gray-700">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
