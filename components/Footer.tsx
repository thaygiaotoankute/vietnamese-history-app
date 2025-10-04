
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-700 text-teal-100 mt-8 py-4">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Dòng Chảy Lịch Sử Việt Nam. Được tạo với React và Gemini API.</p>
      </div>
    </footer>
  );
};

export default Footer;
