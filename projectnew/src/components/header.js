import React from "react";
import logo from "../assets/HeaderIMG.png";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <nav className="ml-6">
            <a href="#" className="text-gray-700 hover:text-blue-500 mx-3">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 mx-3">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 mx-3">Contact</a>
          </nav>
        </div>
        <div>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Log In</a>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
