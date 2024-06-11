import React from 'react';
import './AnimalList.css';

const AnimalList = ({ animals, setSelectedAnimal }) => {
  return (
    <div className="animal-list">
      {animals.map(animal => (
        <div 
          key={animal.id} 
          className="animal-item"
          onClick={() => setSelectedAnimal(animal)}
        >
          <img src={animal.image} alt={animal.name} className="animal-image" />
          <p>{animal.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
