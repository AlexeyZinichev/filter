// src/App.jsx
import React from 'react';
import Portfolio from './components/Portfolio';

const App = () => (
  <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
    <h1>Портфолио проектов</h1>
    <Portfolio />
  </div>
);

export default App;
