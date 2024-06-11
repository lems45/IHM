import React from 'react';
import './AnimalDetail.css';

const AnimalDetail = ({ animal, onClose }) => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="animal-detail">
      <div className="animal-detail-header">
        <h2>{animal.name}</h2>
        <button className="animal-detail-close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="animal-detail-content">
        <div className="animal-detail-image">
          <img src={animal.image} alt={animal.name} />
        </div>
        <div className="animal-detail-info">
          <p>{animal.info}</p>
          <button onClick={() => speak(animal.info)}>Escuchar descripción</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
