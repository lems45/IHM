import React from 'react';

const AnimalDescription = ({ description }) => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <p>{description}</p>
      <button onClick={() => speak(description)}>Escuchar descripción</button>
    </div>
  );
};

export default AnimalDescription;
