
import React, { useState, useCallback, useEffect } from 'react';
import type { PeriodData, ModalContent, HistoricalEvent, HistoricalFigure } from './types';
import { HISTORICAL_PERIODS } from './constants';
import { fetchHistoricalData, getCachedOrGenerateImage } from './services/geminiService';
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

type ImageCache = Record<string, string>;

const App: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>(HISTORICAL_PERIODS[0]);
  const [periodData, setPeriodData] = useState<PeriodData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');

  const [figureImages, setFigureImages] = useState<ImageCache>({});
  const [eventImages, setEventImages] = useState<ImageCache>({});
  const [mapImage, setMapImage] = useState<string | null>(null);

  const handleSelectPeriod = useCallback(async (period: string) => {
    if (period === selectedPeriod && periodData && !isLoading) return;

    setSelectedPeriod(period);
    setIsLoading(true);
    setError(null);
    setPeriodData(null);
    setActiveTab('overview');
    setFigureImages({});
    setEventImages({});
    setMapImage(null);

    try {
      const data = await fetchHistoricalData(period);
      setPeriodData(data);
    } catch (err) {
      setError('Không thể tải dữ liệu. Vui lòng thử lại sau.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedPeriod, periodData, isLoading]);

  useEffect(() => {
    handleSelectPeriod(HISTORICAL_PERIODS[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    if (!periodData) return;

    // Fetch images in the background
    const fetchImages = async () => {
        // Fetch figure images
        periodData.figures.forEach(async (figure) => {
            const cacheKey = `image_figure_${figure.name.replace(/\s/g, '_')}`;
            const url = await getCachedOrGenerateImage(cacheKey, figure.imagePrompt);
            setFigureImages(prev => ({...prev, [figure.name]: url}));
        });

        // Fetch event images
        periodData.events.forEach(async (event) => {
            const cacheKey = `image_event_${event.name.replace(/\s/g, '_')}`;
            const url = await getCachedOrGenerateImage(cacheKey, event.imagePrompt);
            setEventImages(prev => ({...prev, [event.name]: url}));
        });

        // Fetch map image
        const mapCacheKey = `image_map_${selectedPeriod.replace(/\s/g, '_')}`;
        const mapUrl = await getCachedOrGenerateImage(mapCacheKey, periodData.mapData.imagePrompt);
        setMapImage(mapUrl);
    };

    fetchImages();
  }, [periodData, selectedPeriod]);

  const handleShowDetails = useCallback((item: HistoricalEvent | HistoricalFigure) => {
    const imageUrl = 'description' in item ? eventImages[item.name] : figureImages[item.name];
    if ('description' in item) {
      setModalContent({ title: item.name, content: item.description, imageUrl });
    } else {
      setModalContent({ title: item.name, content: `${item.bio}\n\n**Tầm quan trọng:** ${item.significance}`, imageUrl });
    }
  }, [eventImages, figureImages]);

  const renderContent = () => {
    if (!periodData) return null;

    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-10 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">Tổng quan</h2>
              <p className="text-lg leading-relaxed bg-white p-6 rounded-lg shadow-md">{periodData.summary}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">Sự kiện nổi bật</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {periodData.events.map((event) => <EventCard key={event.name} event={event} imageUrl={eventImages[event.name]} onShowDetails={handleShowDetails} />)}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">Nhân vật lịch sử</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {periodData.figures.map((figure) => <FigureCard key={figure.name} figure={figure} imageUrl={figureImages[figure.name]} onShowDetails={handleShowDetails} />)}
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
        return <JigsawPuzzle puzzleData={periodData.jigsawPuzzle} periodName={selectedPeriod} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-teal-50/50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <Timeline periods={HISTORICAL_PERIODS} selectedPeriod={selectedPeriod} onSelectPeriod={handleSelectPeriod} />
        </aside>

        <div className="w-full md:w-2/3 lg:w-3/4">
          {isLoading && (
            <div className="flex justify-center items-center h-full min-h-[50vh]"><LoadingSpinner /></div>
          )}
          {error && <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>}
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

      {modalContent && (
        <Modal title={modalContent.title} onClose={() => setModalContent(null)}>
            {modalContent.imageUrl && <img src={modalContent.imageUrl} alt={modalContent.title} className="w-full h-64 object-cover rounded-lg mb-4"/>}
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{modalContent.content}</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
