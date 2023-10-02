// src/index.jsx
import React from 'react';

function Home() {
  return (
    <iframe 
      src="/index.html" 
      title="Mi Página" 
      style={{ width: '100%', height: '100vh', border: 'none' }} 
    />
  );
}

export default Home;
