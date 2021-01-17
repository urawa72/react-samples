import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sample from './pages/Sample';
import Setting from './pages/Setting';
import NotFound from './pages/NotFound';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';
import BaseRoute from './components/route/BaseRoute';

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
