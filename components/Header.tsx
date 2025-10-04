
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-teal-600 shadow-md text-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-teal-200" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 11-2 0V4H6v12a1 1 0 11-2 0V4zm12 1a1 1 0 011 1v10a1 1 0 11-2 0V6a1 1 0 011-1zM2 6a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        <h1 className="text-3xl font-bold tracking-tight">
          Dòng Chảy Lịch Sử Việt Nam
        </h1>
      </div>
    </header>
  );
};

export default Header;
