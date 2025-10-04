
import React from 'react';
import type { HistoricalFigure } from '../types';

interface FigureCardProps {
  figure: HistoricalFigure;
  imageUrl?: string;
  onShowDetails: (figure: HistoricalFigure) => void;
}

const FigureCard: React.FC<FigureCardProps> = ({ figure, imageUrl, onShowDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      <div className="h-48 w-full bg-gray-200 animate-pulse">
        {imageUrl && <img src={imageUrl} alt={figure.name} className="w-full h-full object-cover"/>}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-2">{figure.name}</h4>
          <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
            {figure.bio}
          </p>
        </div>
        <button
          onClick={() => onShowDetails(figure)}
          className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-800 self-start"
        >
          Xem chi tiết →
        </button>
      </div>
    </div>
  );
};

export default FigureCard;
