import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const latestUpdates = [
    'CCleaner 6.28.11297',
    'VLC Media Player 3.0.21',
    'Adobe Reader 2024.005.20320',
    'WinRAR 7.01',
    'Notepad++ 8.6.9',
  ];

  const latestNews = [
    'Microsoft releases Windows 11 update',
    'Chrome 131 now available',
    'Firefox 132 security update',
    'Adobe Acrobat Reader update',
    'VLC 3.0.21 fixes critical bugs',
    'WinRAR patches security flaw',
  ];

  const languages = [
    'English', 'Deutsch', 'Español', 'Français', 'Italiano', 'Nederlands',
    'Polski', 'Português', 'Русский', '日本語', '한국어', '中文',
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Never miss an update</h3>
            <p className="text-sm text-gray-700 mb-3">Subscribe to our newsletter</p>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
            />
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
            <Link href="#" className="text-sm text-blue-600 hover:underline block mt-2">
              Current Newsletter
            </Link>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Latest Updates</h3>
            <div className="space-y-2">
              {latestUpdates.map((update, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="block text-sm text-blue-600 hover:underline"
                >
                  {update}
                </Link>
              ))}
            </div>
            <Link href="#" className="text-sm text-blue-600 hover:underline font-medium block mt-3">
              All Latest Updates →
            </Link>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Latest News</h3>
            <div className="space-y-2">
              {latestNews.map((news, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="block text-sm text-blue-600 hover:underline"
                >
                  {news}
                </Link>
              ))}
            </div>
            <Link href="#" className="text-sm text-blue-600 hover:underline font-medium block mt-3">
              More News →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-3">Social</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-blue-600 hover:underline">Twitter</Link>
                <Link href="#" className="block text-sm text-blue-600 hover:underline">Facebook</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Products</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-blue-600 hover:underline">UpdateStar Premium</Link>
                <Link href="#" className="block text-sm text-blue-600 hover:underline">UpdateStar Drivers</Link>
                <Link href="#" className="block text-sm text-blue-600 hover:underline">UpdateStar Packs</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Help & Support</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-blue-600 hover:underline">FAQ</Link>
                <Link href="#" className="block text-sm text-blue-600 hover:underline">Contact</Link>
                <Link href="#" className="block text-sm text-blue-600 hover:underline">Support</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-blue-600 hover:underline">About Us</Link>
                <Link href="#" className="block text-sm text-blue-600 hover:underline">Privacy Policy</Link>
                <Link href="#" className="block text-sm text-blue-600 hover:underline">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold mb-3">Languages</h4>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="text-sm text-blue-600 hover:underline"
                >
                  {lang}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-300">
            <p>© 2008 - 2025 UpdateStar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
