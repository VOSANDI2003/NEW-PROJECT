import React from "react";

const FeatureCard = ({ title, features }) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-1/3">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-left mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Explore</a>
    </div>
  );
};

export default FeatureCard;
