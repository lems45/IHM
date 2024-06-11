import React, { useState } from 'react';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';
import Modal from './components/Modal';
import Instructions from './components/Instructions';
import animalsData from './animalsData';
import './App.css';

const App = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="app">
      <h1>Animales 3D</h1>
      <Instructions />
      <AnimalList animals={animalsData} setSelectedAnimal={setSelectedAnimal} />
      {selectedAnimal && (
        <Modal onClose={closeModal}>
          <AnimalDetail animal={selectedAnimal} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;
