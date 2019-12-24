import React from 'react';
import me from './me.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
