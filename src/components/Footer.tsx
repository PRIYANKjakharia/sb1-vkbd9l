import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Happy Hamper</h3>
          <p>Customized hampers for every occasion.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><Link to="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-purple-300 transition-colors">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-purple-300 transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Happy Hamper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;