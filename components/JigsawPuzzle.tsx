import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { JigsawPuzzleData } from '../types';
import LoadingSpinner from './LoadingSpinner';

const GRID_SIZE = 3; // 3x3 grid

interface Piece {
  id: number;
  imgData: string;
  correctPosition: number;
  currentPosition: number;
}

interface JigsawPuzzleProps {
  puzzleData: JigsawPuzzleData;
  periodName: string;
  puzzleImageUrl: string | null;
}

const JigsawPuzzle: React.FC<JigsawPuzzleProps> = ({ puzzleData, periodName, puzzleImageUrl }) => {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSolved, setIsSolved] = useState(false);
  const [draggedPiece, setDraggedPiece] = useState<Piece | null>(null);
  
  // Load và cắt ảnh thành pieces
  const createPuzzlePieces = useCallback(() => {
    if (!puzzleImageUrl) {
      setError("Chưa có ảnh cho trò chơi này.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    setPieces([]);
    setIsSolved(false);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = puzzleImageUrl;
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error("Không thể tạo canvas context");
        }
        
        const pieceWidth = img.width / GRID_SIZE;
        const pieceHeight = img.height / GRID_SIZE;
        const newPieces: Piece[] = [];
        
        // Cắt ảnh thành các mảnh
        for (let y = 0; y < GRID_SIZE; y++) {
          for (let x = 0; x < GRID_SIZE; x++) {
            canvas.width = pieceWidth;
            canvas.height = pieceHeight;
            
            ctx.drawImage(
              img,
              x * pieceWidth,
              y * pieceHeight,
              pieceWidth,
              pieceHeight,
              0,
              0,
              pieceWidth,
              pieceHeight
            );
            
            const position = y * GRID_SIZE + x;
            newPieces.push({
              id: position,
              imgData: canvas.toDataURL(),
              correctPosition: position,
              currentPosition: position,
            });
          }
        }
        
        // Xáo trộn các mảnh
        const shuffled = [...newPieces].sort(() => Math.random() - 0.5);
        setPieces(shuffled.map((p, i) => ({...p, currentPosition: i})));
        setIsLoading(false);
      } catch (err) {
        setError("Không thể xử lý ảnh. Vui lòng thử lại.");
        setIsLoading(false);
        console.error(err);
      }
    };
    
    img.onerror = () => {
      setError("Không thể tải dữ liệu ảnh.");
      setIsLoading(false);
    };
  }, [puzzleImageUrl]);

  // Load pieces khi có ảnh mới
  useEffect(() => {
    createPuzzlePieces();
  }, [createPuzzlePieces]);

  // Kiểm tra xem đã giải xong chưa
  const checkSolved = (currentPieces: Piece[]) => {
    const solved = currentPieces.every(p => p.correctPosition === p.currentPosition);
    if (solved) {
      setIsSolved(true);
    }
  };

  // Drag & Drop handlers
  const handleDragStart = (piece: Piece) => {
    setDraggedPiece(piece);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (targetPiece: Piece) => {
    if (!draggedPiece) return;

    const newPieces = [...pieces];
    const draggedIndex = pieces.findIndex(p => p.id === draggedPiece.id);
    const targetIndex = pieces.findIndex(p => p.id === targetPiece.id);

    // Hoán đổi vị trí
    const tempPosition = newPieces[draggedIndex].currentPosition;
    newPieces[draggedIndex].currentPosition = newPieces[targetIndex].currentPosition;
    newPieces[targetIndex].currentPosition = tempPosition;
    
    setPieces(newPieces);
    setDraggedPiece(null);
    checkSolved(newPieces);
  };
  
  // Sắp xếp pieces theo currentPosition
  const sortedPieces = useMemo(() => {
    return [...pieces].sort((a, b) => a.currentPosition - b.currentPosition);
  }, [pieces]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-white p-8 rounded-lg shadow-lg">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600 text-center">
          Đang chuẩn bị trò chơi ghép tranh...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center text-red-500 bg-red-100 p-6 rounded-lg">
        <p className="font-semibold mb-2">{error}</p>
        <button 
          onClick={createPuzzlePieces}
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Thử lại
        </button>
      </div>
    );
  }

  // Solved state
  if (isSolved) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg shadow-lg animate-fade-in">
        <h3 className="text-3xl font-bold text-green-700 mb-4">🎉 Hoàn thành!</h3>
        <p className="text-gray-700 mb-4">Bạn đã ghép thành công bức tranh lịch sử!</p>
        {puzzleImageUrl && (
          <img 
            src={puzzleImageUrl} 
            alt="Bức tranh hoàn chỉnh" 
            className="rounded-lg shadow-lg mx-auto w-full max-w-sm mb-4"
          />
        )}
        <p className="text-sm text-gray-600 italic mb-4">{puzzleData.relatedFact}</p>
        <button 
          onClick={createPuzzlePieces} 
          className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Chơi lại
        </button>
      </div>
    );
  }

  // Game state
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-teal-700">Ghép tranh Lịch sử</h2>
        <p className="text-gray-600 mt-2">{puzzleData.relatedFact}</p>
        <p className="text-sm text-gray-500 mt-2">Kéo và thả các mảnh để ghép thành bức tranh hoàn chỉnh</p>
      </div>
      
      <div 
        className="grid gap-1 mx-auto" 
        style={{ 
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, 
          width: '100%', 
          maxWidth: '500px', 
          aspectRatio: '1 / 1' 
        }}
      >
        {sortedPieces.map((piece) => (
          <div 
            key={piece.id}
            draggable
            onDragStart={() => handleDragStart(piece)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(piece)}
            className="cursor-grab active:cursor-grabbing border-2 border-white hover:border-teal-300 transition-all rounded-sm overflow-hidden"
            style={{
              backgroundImage: `url(${piece.imgData})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
      
      <div className="text-center mt-6">
        <button
          onClick={createPuzzlePieces}
          className="text-sm text-teal-600 hover:text-teal-800 font-semibold"
        >
          🔄 Xáo trộn lại
        </button>
      </div>
    </div>
  );
};

export default JigsawPuzzle;
