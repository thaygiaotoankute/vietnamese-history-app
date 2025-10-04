
import React from 'react';

interface ActivityTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TABS = [
  { id: 'overview', label: 'Tổng quan' },
  { id: 'map-explorer', label: 'Khám phá Bản đồ' },
  { id: 'sort-events', label: 'Sắp xếp Sự kiện' },
  { id: 'matching-game', label: 'Ghép nối' },
  { id: 'quiz', label: 'Trắc nghiệm' },
  { id: 'jigsaw-puzzle', label: 'Ghép tranh' },
];

const ActivityTabs: React.FC<ActivityTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base transition-colors duration-200
              ${
                activeTab === tab.id
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ActivityTabs;
