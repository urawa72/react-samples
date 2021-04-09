import React from 'react';
import * as H from 'history';
import { Route, Switch, useLocation } from 'react-router-dom';
import Top from './pages/Top';
import Samples from './pages/Samples';
import SampleModal from './components/SampleModal';
import SampleView from './components/SampleView';

const App: React.FC = () => {
  const location = useLocation<{ background: H.Location }>();
  const background = location?.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/samples">
          <Samples />
        </Route>
        <Route exact path="/samples/:id">
          <SampleView />
        </Route>
      </Switch>
      {background && (
        <Route exact path="/samples/:id">
          <SampleModal />
        </Route>
      )}
    </>
  );
};

export default App;
