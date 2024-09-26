import React from 'react';

const ButtonList = () => {
  const buttonLabels = [
    'All', 'Podcasts', 'Premier League', 'UEFA Champions League', 'LaLiga', 
    'Finals', 'APIs', 'Music', 'Gaming', 'Skills', 'Mixes', 
    'Data Structures', 'Gadgets', 'Numericals'
  ];

  return (
    <div className="flex mt-20 ml-40 overflow-x-auto whitespace-nowrap p-4 scrollbar-hide">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-opacity-80 mx-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-colors"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;

