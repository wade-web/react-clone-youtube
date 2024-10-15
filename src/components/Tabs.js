// src/components/Tabs.js
import React, { useState } from 'react';
// import './style/tabs.css';

const categories = [
  { name: 'Tous', id: 'all' },
  { name: 'Musique', id: 'music' },
  { name: 'Code source', id: 'source-code' },
  { name: 'Programmation informatique', id: 'programming' },
  { name: 'Jeux vidéo', id: 'gaming' },
  { name: 'Sport', id: 'sport' },
  { name: 'Hackers', id: 'hackers' },
  { name: 'Mix', id: 'mix' },
];

function Tabs({ onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    onCategorySelect(categoryId);
  };

  return (
    <div className="tabs">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`tab ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
