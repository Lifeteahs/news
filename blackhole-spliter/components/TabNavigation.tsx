'use client';

import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function TabNavigation({ tabs, defaultTab }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      <div className="border-b border-gray-300">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white border-t-2 border-x border-gray-300 border-t-blue-500 text-blue-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="py-6">
        {activeTabContent}
      </div>
    </div>
  );
}
