import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const latestReviews = [
    { title: 'Advanced System Optimizer 3.9', description: 'Boost your PC performance' },
    { title: 'File Manager Pro 2.1', description: 'Organize your files efficiently' },
    { title: 'Network Monitor Plus 4.5', description: 'Track network activity' },
    { title: 'Disk Cleaner Ultimate 1.8', description: 'Free up disk space' },
    { title: 'Security Suite 2024', description: 'Protect your system' },
  ];

  const popularDownloads = [
    { title: 'CCleaner', description: 'System optimization tool' },
    { title: 'WinRAR', description: 'File compression utility' },
    { title: 'VLC Media Player', description: 'Multimedia player' },
    { title: 'Adobe Reader', description: 'PDF viewer' },
    { title: '7-Zip', description: 'File archiver' },
    { title: 'Notepad++', description: 'Text editor' },
  ];

  const categories = [
    'Audio & Multimedia',
    'Business',
    'Communications',
    'Desktop',
    'Development',
    'Education',
    'Games',
    'Graphics Applications',
    'Home & Hobby',
    'Internet',
    'Security',
    'Servers',
    'System Utilities',
    'Web Development',
  ];

  return (
    <aside className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-2">Latest Version</h3>
        <p className="text-3xl font-bold text-blue-600 mb-2">11</p>
        <p className="text-sm text-gray-700 mb-3">Secure and free downloads checked by UpdateStar</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Download Now
        </button>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-3">Stay up-to-date</h3>
        <p className="text-sm text-gray-700 mb-3">with UpdateStar freeware</p>
        <input 
          type="email" 
          placeholder="Your email" 
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
        />
        <button className="w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
          Subscribe
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4 border-b pb-2">Latest Reviews</h3>
        <div className="space-y-3">
          {latestReviews.map((review, index) => (
            <div key={index}>
              <Link href="#" className="text-blue-600 hover:underline font-medium text-sm">
                {review.title}
              </Link>
              <p className="text-xs text-gray-600">{review.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4 border-b pb-2">Most Popular Downloads</h3>
        <div className="space-y-3">
          {popularDownloads.map((download, index) => (
            <div key={index}>
              <Link href="#" className="text-blue-600 hover:underline font-medium text-sm">
                {download.title}
              </Link>
              <p className="text-xs text-gray-600">{download.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4 border-b pb-2">Browse Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href="#" 
              className="block text-sm text-blue-600 hover:underline"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
