import React from 'react';
import './App.css';
import Info from '../Info/Info';
import Roller from '../Roller/Roller';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rollenspielsache Dashboard</h1>
        <Roller />
        <Info />
      </header>
    </div>
  );
}

export default App;
