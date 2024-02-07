// CircularNavbar.js
import React from 'react';
import { Planet } from 'react-planet';
import './CircularNavbar.css'; // Import the corresponding CSS file

const CircularNavbar = ({ categories, onCategoryClick }) => {
  return (
    <div className="circular-navbar-container">
      <Planet centerContent={<img src="https://srijanju.in/_next/image?url=%2Fassets%2FVector.png&w=256&q=75" alt="Logo" />} hideOrbit>
        {categories.map((category, index) => (
          <div key={index} onClick={() => onCategoryClick(category)}>
            {category}
          </div>
        ))}
      </Planet>
    </div>
  );
};

export default CircularNavbar;
