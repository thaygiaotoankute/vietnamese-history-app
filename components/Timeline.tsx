
import React from 'react';

interface TimelineProps {
  periods: string[];
  selectedPeriod: string | null;
  onSelectPeriod: (period: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ periods, selectedPeriod, onSelectPeriod }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg sticky top-24">
      <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">Dòng Thời Gian</h3>
      <div className="relative border-l-2 border-teal-200 ml-3 h-[60vh] overflow-y-auto pr-2">
        <ul className="space-y-4">
          {periods.map((period, index) => (
            <li key={index} className="ml-6">
              <span className={`absolute -left-[7px] flex items-center justify-center w-4 h-4 rounded-full ring-4 ring-white ${selectedPeriod === period ? 'bg-teal-500' : 'bg-teal-200'}`}></span>
              <button
                onClick={() => onSelectPeriod(period)}
                className={`text-left text-sm font-medium transition-colors duration-200 w-full p-2 rounded-md ${
                  selectedPeriod === period
                    ? 'text-teal-700 font-bold bg-teal-100'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {period}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
