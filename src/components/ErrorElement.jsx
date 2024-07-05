// src/components/ErrorElement.jsx
import React from 'react';
import {Container} from '../components'

const ErrorElement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pastel-green-300 text-center">
      <Container>
        <div className="p-4">
          <h1 className="text-4xl font-bold text-dark-blue-500 mb-4">Site under construction</h1>
          <p className="text-lg text-gray-700">We're working hard to improve our website and we'll be ready to launch soon. Thank you for your patience!</p>
        </div>
      </Container>
    </div>
  );
};

export default ErrorElement;
