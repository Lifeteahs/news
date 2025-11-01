import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import ProductHeader from '@/components/ProductHeader';
import TabNavigation from '@/components/TabNavigation';
import ReviewContent from '@/components/ReviewContent';
import ProsConsSection from '@/components/ProsConsSection';
import FAQSection from '@/components/FAQSection';
import AuthorSection from '@/components/AuthorSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import RelatedProducts from '@/components/RelatedProducts';

export default function Home() {
  const tabs = [
    {
      id: 'review',
      label: 'Review',
      content: (
        <div>
          <ReviewContent />
          <ProsConsSection />
          <FAQSection />
          <AuthorSection />
          <ScreenshotsSection />
          <RelatedProducts />
        </div>
      ),
    },
    {
      id: 'technical',
      label: 'Technical',
      content: (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">System Requirements</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Operating System: Windows 10/11, macOS 10.15+, Linux</li>
                <li>Processor: Intel Core i3 or equivalent</li>
                <li>RAM: 4GB minimum, 8GB recommended</li>
                <li>Storage: 2GB free disk space</li>
                <li>Display: 1280x720 minimum resolution</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Supported Technologies</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React, Vue.js, Angular frameworks</li>
                <li>Node.js, Python, PHP backends</li>
                <li>Git version control integration</li>
                <li>Docker container support</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'edit',
      label: 'Edit',
      content: (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Edit Information</h2>
          <p className="text-gray-700 mb-4">
            This section is reserved for authorized editors to update product information.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Request Edit Access
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductHeader />
            <TabNavigation tabs={tabs} defaultTab="review" />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
