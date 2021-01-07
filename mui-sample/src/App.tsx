import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Home from './components/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  // box-shadowをすべてなくす
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  palette: {
    primary: {
      main: '#4caf50',
      contrastText: ' #fff',
    },
    secondary: {
      main: '#3f51b5',
      contrastText: ' #fff',
    },
  },
});

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveDrawer>
        <Route exact path="/" component={Home} />
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
