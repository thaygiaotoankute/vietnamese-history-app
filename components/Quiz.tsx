
import React, { useState, useEffect } from 'react';
import type { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] =useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  }, [questions]);
  
  if (!questions || questions.length === 0) {
    return <p>Không có câu hỏi nào cho thời kỳ này.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (optionKey: string) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(optionKey);
    const correct = optionKey === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  }

  if (showResult) {
      return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Hoàn thành!</h3>
            <p className="text-lg mb-6">Bạn đã trả lời đúng {score} / {questions.length} câu hỏi.</p>
            <button
                onClick={handleRestart}
                className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors"
            >
                Làm lại
            </button>
        </div>
      )
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-sm text-gray-500 mb-2">Câu hỏi {currentQuestionIndex + 1} / {questions.length}</p>
      <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>
      <div className="space-y-4">
        {Object.entries(currentQuestion.options).map(([key, value]) => {
          const isSelected = selectedAnswer === key;
          const isCorrectAnswer = key === currentQuestion.correctAnswer;
          
          let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
          if (isSelected) {
            buttonClass += isCorrect ? "bg-green-100 border-green-500 text-green-800 font-bold" : "bg-red-100 border-red-500 text-red-800 font-bold";
          } else if (selectedAnswer && isCorrectAnswer) {
             buttonClass += "bg-green-100 border-green-500";
          }
          else {
            buttonClass += "bg-gray-50 border-gray-200 hover:bg-teal-50 hover:border-teal-300";
          }

          return (
            <button
              key={key}
              onClick={() => handleAnswerSelect(key)}
              disabled={!!selectedAnswer}
              className={buttonClass}
            >
              <span className="font-bold mr-2">{key}.</span> {value}
            </button>
          );
        })}
      </div>
      {selectedAnswer && (
        <div className="mt-6 text-center">
          <button
            onClick={handleNext}
            className="bg-teal-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-teal-700 transition-colors"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
