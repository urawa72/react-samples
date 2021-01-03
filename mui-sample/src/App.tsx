import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Route exact path="/" component={DashBoard} />
    </div>
  );
}

export default App;
