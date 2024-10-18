import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Home, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Happy Hamper</Link>
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center hover:text-purple-200 transition-colors">
            <Home className="mr-1" size={20} />
            Home
          </Link>
          <Link to="/cart" className="flex items-center hover:text-purple-200 transition-colors">
            <ShoppingCart className="mr-1" size={20} />
            Cart
          </Link>
          <Link to="/profile" className="flex items-center hover:text-purple-200 transition-colors">
            <User className="mr-1" size={20} />
            Profile
          </Link>
          <Link to="/auth" className="flex items-center hover:text-purple-200 transition-colors">
            <LogIn className="mr-1" size={20} />
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;