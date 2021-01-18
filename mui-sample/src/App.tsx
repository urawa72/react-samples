import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch } from 'react-router-dom';
import BaseRoute from './components/route/BaseRoute';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Sample from './pages/Sample';
import Setting from './pages/Setting';
import { theme } from './utils/theme';

console.log(theme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <BaseRoute exact path="/" component={Home} />
          <BaseRoute exact path="/sample" component={Sample} />
          <BaseRoute exact path="/setting" component={Setting} />
          <BaseRoute path="*" component={NotFound} noLayout={true} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
