import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from './Books';
import Top from './Top';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Top />
      </Route>
      <Route exact path="/books">
        <Books />
      </Route>
    </Switch>
  );
};

export default App;
