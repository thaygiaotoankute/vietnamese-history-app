
import React from 'react';
import type { HistoricalEvent } from '../types';

interface EventCardProps {
  event: HistoricalEvent;
  imageUrl?: string;
  onShowDetails: (event: HistoricalEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, imageUrl, onShowDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      <div className="h-48 w-full bg-gray-200 animate-pulse">
        {imageUrl && <img src={imageUrl} alt={event.name} className="w-full h-full object-cover"/>}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div>
          <p className="text-sm font-semibold text-teal-600 mb-1">{event.date}</p>
          <h4 className="text-lg font-bold text-gray-800 mb-2">{event.name}</h4>
          <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
            {event.description}
          </p>
        </div>
        <button
          onClick={() => onShowDetails(event)}
          className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-800 self-start"
        >
          Xem chi tiết →
        </button>
      </div>
    </div>
  );
};

export default EventCard;
