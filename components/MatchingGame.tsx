
import React, { useState, useEffect, useMemo } from 'react';
import type { HistoricalEvent } from '../types';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MatchingGame: React.FC<{ events: HistoricalEvent[] }> = ({ events }) => {
  const [names, setNames] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [incorrectPair, setIncorrectPair] = useState<{name: string, date: string} | null>(null);

  const eventMap = useMemo(() => {
    const map = new Map<string, string>();
    events.forEach(event => map.set(event.name, event.date));
    return map;
  }, [events]);
  
  useEffect(() => {
    const eventNames = events.map(e => e.name);
    const eventDates = events.map(e => e.date);
    setNames(shuffleArray(eventNames));
    setDates(shuffleArray(eventDates));
    setMatchedPairs({});
    setSelectedName(null);
    setSelectedDate(null);
    setIncorrectPair(null);
  }, [events]);

  useEffect(() => {
    if (selectedName && selectedDate) {
      if (eventMap.get(selectedName) === selectedDate) {
        setMatchedPairs(prev => ({ ...prev, [selectedName]: selectedDate }));
      } else {
        setIncorrectPair({ name: selectedName, date: selectedDate });
        setTimeout(() => {
            setIncorrectPair(null);
        }, 800);
      }
      setSelectedName(null);
      setSelectedDate(null);
    }
  }, [selectedName, selectedDate, eventMap]);
  
  const handleReset = () => {
      const eventNames = events.map(e => e.name);
      const eventDates = events.map(e => e.date);
      setNames(shuffleArray(eventNames));
      setDates(shuffleArray(eventDates));
      setMatchedPairs({});
      setSelectedName(null);
      setSelectedDate(null);
      setIncorrectPair(null);
  }

  const isGameWon = Object.keys(matchedPairs).length === events.length;

  const getButtonClass = (type: 'name' | 'date', value: string) => {
    const isSelected = selectedName === value || selectedDate === value;
    const isMatched = (type === 'name' && matchedPairs[value]) || (type === 'date' && Object.values(matchedPairs).includes(value));
    const isIncorrect = (type === 'name' && incorrectPair?.name === value) || (type === 'date' && incorrectPair?.date === value);
    
    if (isMatched) return 'bg-green-200 border-green-400 text-green-800 cursor-not-allowed';
    if (isIncorrect) return 'bg-red-200 border-red-400 text-red-800 animate-shake';
    if (isSelected) return 'bg-teal-200 border-teal-400 ring-2 ring-teal-500';
    return 'bg-white hover:bg-teal-50 border-gray-300';
  };

  if (isGameWon) {
      return (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">Chúc mừng!</h2>
              <p className="text-gray-700 mb-6">Bạn đã ghép nối thành công tất cả các sự kiện.</p>
              <button onClick={handleReset} className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors">Chơi lại</button>
          </div>
      )
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-teal-700 mb-2">Ghép nối Sự kiện & Thời gian</h2>
      <p className="text-gray-600 mb-6">Chọn một sự kiện ở cột bên trái và thời gian tương ứng ở cột bên phải.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-4 text-center">Sự kiện</h3>
          <div className="space-y-3">
            {names.map(name => (
              <button
                key={name}
                onClick={() => !matchedPairs[name] && setSelectedName(name)}
                disabled={!!matchedPairs[name]}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 font-medium ${getButtonClass('name', name)}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-center">Thời gian</h3>
          <div className="space-y-3">
            {dates.map(date => (
              <button
                key={date}
                onClick={() => !Object.values(matchedPairs).includes(date) && setSelectedDate(date)}
                disabled={Object.values(matchedPairs).includes(date)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 font-medium ${getButtonClass('date', date)}`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MatchingGame;
