import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>Instrucciones</h2>
      <p>- Seleccione un animal de la lista para ver más detalles sobre él.</p>
      <p>- Escanee el código QR a continuación para descargar nuestra aplicación de realidad aumentada.</p>
      <div className="qr-code">
        <img src="path/to/qr-code.png" alt="QR para descargar la aplicación" />
      </div>
    </div>
  );
};

export default Instructions;
