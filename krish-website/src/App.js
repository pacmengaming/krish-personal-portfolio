// src/App.js
import React from 'react';
import Chat from './Chat';

function App() {
  return (
    <div className="min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-custom-green">
          Hi! I'm Krish Vazirani
        </h1>
        <p className="mt-4 text-lg">
          Ask me anything about myself.
        </p>
      </header>
      <Chat />
    </div>
  );
}

export default App;
