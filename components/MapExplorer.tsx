
import React, { useState } from 'react';
import type { MapData, MapLocation } from '../types';

interface MapExplorerProps {
  mapData: MapData;
  mapImageUrl: string | null;
}

const MapExplorer: React.FC<MapExplorerProps> = ({ mapData, mapImageUrl }) => {
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-teal-700 mb-2 text-center">Khám phá Bản đồ Lịch sử</h2>
      <p className="text-gray-600 mb-6 text-center">Nhấn vào các điểm đánh dấu trên bản đồ để tìm hiểu thêm về các địa danh quan trọng.</p>
      
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-200 animate-pulse">
        {mapImageUrl ? (
          <img src={mapImageUrl} alt="Bản đồ lịch sử" className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Đang tải bản đồ...</p>
          </div>
        )}
        
        {mapImageUrl && mapData.locations.map(location => (
          <div key={location.name}>
            <button
              className="absolute w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 animate-pulse-marker"
              style={{ left: `${location.lng}%`, top: `${location.lat}%` }}
              onClick={() => setActiveLocation(location)}
              aria-label={`Thông tin về ${location.name}`}
            ></button>
          </div>
        ))}

        {activeLocation && (
          <div 
            className="absolute p-4 bg-white rounded-lg shadow-xl max-w-xs animate-fade-in-up z-10"
            style={{ 
                left: `${activeLocation.lng > 50 ? activeLocation.lng - 25 : activeLocation.lng + 2}%`, 
                top: `${activeLocation.lat > 50 ? activeLocation.lat - 25 : activeLocation.lat + 2}%`,
                transform: `translate(${activeLocation.lng > 50 ? '-100%' : '0'}, ${activeLocation.lat > 50 ? '-100%' : '0'})`
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-teal-800">{activeLocation.name}</h4>
                <p className="text-sm text-gray-700 mt-1">{activeLocation.description}</p>
              </div>
              <button onClick={() => setActiveLocation(null)} className="ml-2 text-gray-400 hover:text-gray-600" aria-label="Đóng">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes pulse-marker {
            0%, 100% {
                transform: scale(1) translate(-50%, -50%);
                opacity: 1;
            }
            50% {
                transform: scale(1.1) translate(-50%, -50%);
                opacity: 0.7;
            }
        }
        .animate-pulse-marker {
            animation: pulse-marker 2s infinite ease-in-out;
        }
        @keyframes animate-fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: animate-fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MapExplorer;
