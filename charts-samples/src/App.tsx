import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HighchartsTest from './components/HighchartsTest';
import RechartsTest from './components/RechartsTest';
import RechartsTest2 from './components/RechartsTest2';
import GoogleChartTest from './components/GoogleChartTest';
import GoogleChartTest2 from './components/GoogleChartTest2';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/highcharts" className="link-name">
          Highcharts
        </Link>
        <Link to="/recharts" className="link-name">
          Recharts
        </Link>
        <Link to="/recharts2" className="link-name">
          Recharts2
        </Link>
        <Link to="/google-chart" className="link-name">
          Google Chart
        </Link>
        <Link to="/google-chart2" className="link-name">
          Google Chart2
        </Link>
        <Switch>
          <Route exact path="/highcharts" component={HighchartsTest} />
          <Route exact path="/recharts" component={RechartsTest} />
          <Route exact path="/recharts2" component={RechartsTest2} />
          <Route exact path="/google-chart" component={GoogleChartTest} />
          <Route exact path="/google-chart2" component={GoogleChartTest2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
