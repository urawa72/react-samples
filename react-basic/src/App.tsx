import React from 'react';
import HocSample from './components/HocSample';
import RenderPropsSample from './components/RenderPropsSample';
import HooksSample from './components/HooksSample';

function App() {
  return (
    <div className="App">
      <HocSample max={10} />
      <RenderPropsSample max={20} />
      <HooksSample limit={20} />
    </div>
  );
}

export default App;
