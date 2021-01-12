import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Sample from './pages/Sample';
import Setting from './pages/Setting';
import NotFound from './pages/NotFound';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/sample" component={Sample} />
        <Route exact path="/setting" component={Setting} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
