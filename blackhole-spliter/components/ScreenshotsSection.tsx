import React from 'react';

export default function ScreenshotsSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">SCREENSHOTS (CLICK TO VIEW LARGER)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div 
            key={num}
            className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity border border-gray-300"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">🖼️</div>
              <p className="text-sm text-gray-600">Screenshot {num}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
