import React from 'react';
import ColorfulBeads from './containers/ColorfulBeads';
import CounterBoard from './containers/CounterBoard';
import './App.css';

const App: React.VFC = () => {
  return (
    <div className="container">
      <header>
        <h1>Beads Counter</h1>
      </header>
      <CounterBoard />
      <ColorfulBeads />
    </div>
  );
};

export default App;
