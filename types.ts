
export interface HistoricalEvent {
  name: string;
  date: string;
  description: string;
  imagePrompt: string;
  location?: { 
    name: string;
    lat: number; // Latitude (0-100)
    lng: number; // Longitude (0-100)
  };
}

export interface HistoricalFigure {
  name:string;
  bio: string;
  significance: string;
  imagePrompt: string;
}

export interface QuizQuestion {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface JigsawPuzzleData {
  imagePrompt: string;
  relatedFact: string;
}

export interface MapLocation {
    name: string;
    description: string;
    lat: number; // Latitude percentage (0-100) for positioning
    lng: number; // Longitude percentage (0-100) for positioning
}

export interface MapData {
    imagePrompt: string;
    locations: MapLocation[];
}

export interface PeriodData {
  summary: string;
  events: HistoricalEvent[];
  figures: HistoricalFigure[];
  quiz: QuizQuestion[];
  jigsawPuzzle: JigsawPuzzleData;
  mapData: MapData;
}

export interface ModalContent {
  title: string;
  content: string;
  imageUrl?: string;
}
