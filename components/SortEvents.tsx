
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { HistoricalEvent } from '../types';

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const SortEvents: React.FC<{ events: HistoricalEvent[] }> = ({ events }) => {
  const [shuffledEvents, setShuffledEvents] = useState<HistoricalEvent[]>([]);
  const [userSortedEvents, setUserSortedEvents] = useState<HistoricalEvent[]>([]);
  const [draggedItem, setDraggedItem] = useState<HistoricalEvent | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const originalOrder = useMemo(() => events.map(e => e.name), [events]);

  useEffect(() => {
    setShuffledEvents(shuffleArray(events));
    setUserSortedEvents([]);
    setIsCorrect(null);
  }, [events]);

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, item: HistoricalEvent) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    if (draggedItem) {
      setUserSortedEvents(prev => [...prev, draggedItem]);
      setShuffledEvents(prev => prev.filter(item => item.name !== draggedItem.name));
      setDraggedItem(null);
      setIsCorrect(null);
    }
  };
  
  const handleReset = useCallback(() => {
     setShuffledEvents(shuffleArray(events));
     setUserSortedEvents([]);
     setIsCorrect(null);
  }, [events]);

  const checkOrder = () => {
    if (userSortedEvents.length !== originalOrder.length) {
      setIsCorrect(false);
      return;
    }
    const userOrder = userSortedEvents.map(e => e.name);
    const correct = JSON.stringify(userOrder) === JSON.stringify(originalOrder);
    setIsCorrect(correct);
  };
  
  const EventItem: React.FC<{event: HistoricalEvent, draggable: boolean}> = ({event, draggable}) => (
     <li
        draggable={draggable}
        onDragStart={draggable ? (e) => handleDragStart(e, event) : undefined}
        className={`p-4 rounded-lg border-2 mb-2 ${draggable ? 'bg-white cursor-grab shadow-sm' : 'bg-gray-100'}`}
    >
        <p className="font-bold text-gray-800">{event.name}</p>
        <p className="text-sm text-gray-600">{event.date}</p>
    </li>
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-teal-700 mb-2">Sắp xếp Dòng sự kiện</h2>
      <p className="text-gray-600 mb-6">Kéo các sự kiện từ cột bên trái và thả vào cột bên phải theo đúng thứ tự thời gian từ trước đến sau.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4 text-center">Sự kiện</h3>
          <ul className="p-4 bg-gray-50 rounded-lg min-h-[300px]">
            {shuffledEvents.map(event => <EventItem key={event.name} event={event} draggable={true} />)}
            {shuffledEvents.length === 0 && <p className="text-gray-400 text-center pt-10">Kéo hết sự kiện sang đây!</p>}
          </ul>
        </div>

        <div>
           <h3 className="font-bold text-lg mb-4 text-center">Thứ tự của bạn</h3>
           <div 
             onDragOver={handleDragOver} 
             onDrop={handleDrop}
             className="p-4 bg-teal-50 border-2 border-dashed border-teal-300 rounded-lg min-h-[300px]"
            >
            <ul >
                {userSortedEvents.map(event => <EventItem key={event.name} event={event} draggable={false} />)}
                {userSortedEvents.length === 0 && <p className="text-gray-400 text-center pt-10">Thả sự kiện vào đây</p>}
            </ul>
           </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
          {isCorrect === null && userSortedEvents.length === events.length && (
               <button onClick={checkOrder} className="bg-teal-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-teal-700 transition-colors">Kiểm tra</button>
          )}
          <button onClick={handleReset} className="ml-4 bg-gray-200 text-gray-800 font-bold py-2 px-8 rounded-lg hover:bg-gray-300 transition-colors">Chơi lại</button>
      </div>

       {isCorrect !== null && (
          <div className={`mt-6 p-4 rounded-lg text-center font-bold text-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isCorrect ? 'Chính xác! Bạn đã sắp xếp đúng thứ tự.' : 'Chưa đúng! Vui lòng thử lại.'}
          </div>
        )}

    </div>
  );
};

export default SortEvents;
