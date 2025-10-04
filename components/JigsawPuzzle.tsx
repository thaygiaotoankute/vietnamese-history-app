
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getCachedOrGenerateImage } from '../services/geminiService';
import type { JigsawPuzzleData } from '../types';
import LoadingSpinner from './LoadingSpinner';

const GRID_SIZE = 3; // 3x3 grid

interface Piece {
  id: number;
  imgData: string;
  correctPosition: number;
  currentPosition: number;
}

const JigsawPuzzle: React.FC<{ puzzleData: JigsawPuzzleData, periodName: string }> = ({ puzzleData, periodName }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSolved, setIsSolved] = useState(false);
  const [draggedPiece, setDraggedPiece] = useState<Piece | null>(null);
  
  const createImage = useCallback(async (forceNew = false) => {
    const cacheKey = `jigsaw_image_${periodName}`;
    
    setIsLoading(true);
    setError(null);
    setPieces([]);
    setIsSolved(false);

    try {
        if (forceNew) {
            localStorage.removeItem(cacheKey);
        }
      const url = await getCachedOrGenerateImage(cacheKey, puzzleData.imagePrompt);
      setImageUrl(url);
    } catch (err) {
      setError("Không thể tạo ảnh cho trò chơi. Vui lòng thử lại.");
      console.error(err);
      setIsLoading(false);
    }
  }, [puzzleData.imagePrompt, periodName]);

  useEffect(() => {
    createImage();
  }, [createImage]);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const pieceWidth = img.width / GRID_SIZE;
      const pieceHeight = img.height / GRID_SIZE;
      const newPieces: Piece[] = [];
      
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
      
      // Shuffle pieces
      const shuffled = [...newPieces].sort(() => Math.random() - 0.5);
      setPieces(shuffled.map((p, i) => ({...p, currentPosition: i})));
      setIsLoading(false);
      setIsSolved(false);
    };
    img.onerror = () => {
      setError("Không thể tải dữ liệu ảnh.");
      setIsLoading(false);
    }
  }, [imageUrl]);

  const checkSolved = (currentPieces: Piece[]) => {
      const solved = currentPieces.every(p => p.correctPosition === p.currentPosition);
      if (solved) {
          setIsSolved(true);
      }
  };

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

    // Swap positions
    const tempPosition = newPieces[draggedIndex].currentPosition;
    newPieces[draggedIndex].currentPosition = newPieces[targetIndex].currentPosition;
    newPieces[targetIndex].currentPosition = tempPosition;
    
    setPieces(newPieces);
    setDraggedPiece(null);
    checkSolved(newPieces);
  };
  
  const sortedPieces = useMemo(() => {
      return [...pieces].sort((a,b) => a.currentPosition - b.currentPosition)
  }, [pieces]);

  if (isLoading) {
    return (
        <div className="flex flex-col items-center justify-center h-64 bg-white p-8 rounded-lg shadow-lg">
            <LoadingSpinner/>
            <p className="mt-4 text-gray-600 text-center">Đang tạo một bức tranh độc đáo về thời kỳ này...<br/>Quá trình này có thể mất một chút thời gian.</p>
        </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>;
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
        <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-teal-700">Ghép tranh Lịch sử</h2>
            <p className="text-gray-600 mt-2">{puzzleData.relatedFact}</p>
        </div>
        
        {isSolved ? (
            <div className="text-center p-8 bg-green-50 rounded-lg">
                <h3 className="text-3xl font-bold text-green-700 mb-4">Hoàn thành!</h3>
                <img src={imageUrl!} alt="Bức tranh hoàn chỉnh" className="rounded-lg shadow-lg mx-auto w-full max-w-sm" />
                <button onClick={() => createImage(true)} className="mt-6 bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors">Chơi lại với ảnh khác</button>
            </div>
        ) : (
            <div className="grid gap-1 mx-auto" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, width: '100%', maxWidth: '400px', aspectRatio: '1 / 1' }}>
                {sortedPieces.map((piece) => (
                    <div 
                        key={piece.id}
                        draggable
                        onDragStart={() => handleDragStart(piece)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(piece)}
                        className="cursor-grab border-2 border-white transition-all"
                        style={{
                            backgroundImage: `url(${piece.imgData})`,
                            backgroundSize: 'cover',
                        }}
                    ></div>
                ))}
            </div>
        )}
    </div>
  );
};

export default JigsawPuzzle;
