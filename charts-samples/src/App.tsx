import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HighchartsTest from './components/HighchartsTest';
import RechartsTest from './components/RechartsTest';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/highcharts">Highcharts</Link>
        </div>
        <div>
          <Link to="/recharts">Recharts</Link>
        </div>
        <Switch>
          <Route exact path="/highcharts" component={HighchartsTest} />
          <Route exact path="/recharts" component={RechartsTest} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
