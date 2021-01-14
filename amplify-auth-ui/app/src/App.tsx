import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import MyAmplifySignIn from './auth/MyAmplifySignIn';
import MyAmplifySignUp from './auth/MyAmplifySignUp';
import MyAmplifyForgotPassword from './auth/MyAmplifyForgotPassword';
import AuthProvider from './auth/AuthProvider';
import NormalRoute from './components/route/NormalRoute';
import Home from './pages/Home';
import Test from './pages/Test';
import Sample from './pages/Sample';
import Setting from './pages/Setting';
import DrawerLayout from './components/layout/DrawerLayout';
import { amplifyInit } from './auth/amplifyInit';

amplifyInit();

function App() {
  return (
    <BrowserRouter>
      <AmplifyAuthenticator>
        <MyAmplifySignIn />
        <MyAmplifySignUp />
        <MyAmplifyForgotPassword />
        <AuthProvider>
          <Switch>
            <NormalRoute
              exact
              path="/"
              component={Home}
              layout={DrawerLayout}
            />
            <NormalRoute
              exact
              path="/test"
              component={Test}
              layout={DrawerLayout}
            />
            <NormalRoute
              exact
              path="/sample"
              component={Sample}
              layout={DrawerLayout}
            />
            <NormalRoute
              exact
              path="/setting"
              component={Setting}
              layout={DrawerLayout}
            />
          </Switch>
        </AuthProvider>
      </AmplifyAuthenticator>
    </BrowserRouter>
  );
}

export default App;
