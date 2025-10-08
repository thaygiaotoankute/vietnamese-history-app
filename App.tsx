import React, { useState, useCallback, useEffect } from 'react';
import type { PeriodData, ModalContent, HistoricalEvent, HistoricalFigure } from './types';
import { HISTORICAL_PERIODS } from './constants';
import { getHistoricalDataByPeriod, getDefaultPeriodData } from './historicalData';
import { EVENT_IMAGES, FIGURE_IMAGES, MAP_IMAGES, PUZZLE_IMAGES } from './imageMapping';
import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import EventCard from './components/EventCard';
import FigureCard from './components/FigureCard';
import Quiz from './components/Quiz';
import Modal from './components/Modal';
import LoadingSpinner from './components/LoadingSpinner';
import ActivityTabs from './components/ActivityTabs';
import SortEvents from './components/SortEvents';
import JigsawPuzzle from './components/JigsawPuzzle';
import MatchingGame from './components/MatchingGame';
import MapExplorer from './components/MapExplorer';
import Chatbot from './components/Chatbot';

type ImageCache = Record<string, string>;

const App: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>(HISTORICAL_PERIODS[0]);
  const [periodData, setPeriodData] = useState<PeriodData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [showChatbot, setShowChatbot] = useState<boolean>(false);

  // Load ảnh từ imageMapping
  const [figureImages] = useState<ImageCache>(FIGURE_IMAGES);
  const [eventImages] = useState<ImageCache>(EVENT_IMAGES);
  const [mapImage, setMapImage] = useState<string | null>(null);
  const [puzzleImage, setPuzzleImage] = useState<string | null>(null);

  // Hàm load dữ liệu khi chọn thời kỳ
  const handleSelectPeriod = useCallback((period: string) => {
  console.log('🔍 Selected period:', period); // DEBUG
  
  if (period === selectedPeriod && periodData && !isLoading) {
    console.log('⚠️ Same period, skipping...'); // DEBUG
    return;
  }

  setSelectedPeriod(period);
  setIsLoading(true);
  setPeriodData(null);
  setActiveTab('overview');

  setTimeout(() => {
    // Lấy dữ liệu cố định từ historicalData
    let data = getHistoricalDataByPeriod(period);
    console.log('📊 Data from historicalData:', data ? '✅ Found' : '❌ Not found'); // DEBUG
    
    // Nếu chưa có dữ liệu cho thời kỳ này, dùng dữ liệu mặc định
    if (!data) {
      console.log('⚠️ Using default data for:', period); // DEBUG
      data = getDefaultPeriodData(period);
    } else {
      console.log('✅ Using real data, summary:', data.summary.substring(0, 50) + '...'); // DEBUG
    }
    
    setPeriodData(data);
    
    // Load ảnh bản đồ và puzzle cho thời kỳ này
    setMapImage(MAP_IMAGES[period] || MAP_IMAGES["default"]);
    setPuzzleImage(PUZZLE_IMAGES[period] || PUZZLE_IMAGES["default"]);
    
    setIsLoading(false);
  }, 500);
}, [selectedPeriod, periodData, isLoading]);

  // Hàm hiển thị chi tiết sự kiện/nhân vật trong modal
  const handleShowDetails = useCallback((item: HistoricalEvent | HistoricalFigure) => {
    const imageUrl = 'description' in item ? eventImages[item.name] : figureImages[item.name];
    if ('description' in item) {
      setModalContent({ title: item.name, content: item.description, imageUrl });
    } else {
      setModalContent({ 
        title: item.name, 
        content: `${item.bio}\n\n**Tầm quan trọng:** ${item.significance}`, 
        imageUrl 
      });
    }
  }, [eventImages, figureImages]);

  // Render nội dung theo tab được chọn
  const renderContent = () => {
    if (!periodData) return null;

    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-10 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">
                Tổng quan
              </h2>
              <p className="text-lg leading-relaxed bg-white p-6 rounded-lg shadow-md">
                {periodData.summary}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">
                Sự kiện nổi bật
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {periodData.events.map((event) => (
                  <EventCard 
                    key={event.name} 
                    event={event} 
                    imageUrl={eventImages[event.name]} 
                    onShowDetails={handleShowDetails} 
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">
                Nhân vật lịch sử
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {periodData.figures.map((figure) => (
                  <FigureCard 
                    key={figure.name} 
                    figure={figure} 
                    imageUrl={figureImages[figure.name]} 
                    onShowDetails={handleShowDetails} 
                  />
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'sort-events':
        return <SortEvents events={periodData.events} />;
        
      case 'matching-game':
        return <MatchingGame events={periodData.events} />;
        
      case 'map-explorer':
        return <MapExplorer mapData={periodData.mapData} mapImageUrl={mapImage} />;
        
      case 'quiz':
        return <Quiz questions={periodData.quiz} />;
        
      case 'jigsaw-puzzle':
        return (
          <JigsawPuzzle 
            puzzleData={periodData.jigsawPuzzle} 
            periodName={selectedPeriod}
            puzzleImageUrl={puzzleImage}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-teal-50/50 text-gray-800">
      <Header />
      
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Timeline */}
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <Timeline 
            periods={HISTORICAL_PERIODS} 
            selectedPeriod={selectedPeriod} 
            onSelectPeriod={handleSelectPeriod} 
          />
        </aside>

        {/* Main Content Area */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          {isLoading && (
            <div className="flex justify-center items-center h-full min-h-[50vh]">
              <LoadingSpinner />
            </div>
          )}
          
          {periodData && !isLoading && (
            <div>
              <ActivityTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <div className="mt-6">
                {renderContent()}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />

      {/* Modal chi tiết */}
      {modalContent && (
        <Modal title={modalContent.title} onClose={() => setModalContent(null)}>
          {modalContent.imageUrl && (
            <img 
              src={modalContent.imageUrl} 
              alt={modalContent.title} 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {modalContent.content}
          </p>
        </Modal>
      )}

      {/* Nút mở Chatbot - Fixed button ở góc dưới phải */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
        aria-label={showChatbot ? "Đóng chatbot" : "Mở chatbot"}
        title={showChatbot ? "Đóng chatbot" : "Hỏi về lịch sử"}
      >
        {showChatbot ? (
          // Icon X khi chatbot đang mở
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Icon Chat khi chatbot đang đóng
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chatbot Component - Hiển thị khi showChatbot = true */}
      {showChatbot && (
        <Chatbot 
          onClose={() => setShowChatbot(false)}
          currentPeriod={selectedPeriod}
        />
      )}
    </div>
  );
};

export default App;
