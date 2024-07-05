// src/components/ErrorElement.jsx
import React from 'react';
import {Container} from '../components'
import workerImage from '../assets/04Worker.png'

const ErrorElement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <Container>
        <div className="p-4">
          <h1 className="text-4xl font-bold text-dark-blue-500 mb-4">Site under construction</h1>
          <img src={workerImage} alt="" />
          <p className="text-lg text-gray-700">We're working hard to improve our website and we'll be ready to launch soon. Thank you for your patience!</p>
        </div>
      </Container>
    </div>
  );
};

export default ErrorElement;
