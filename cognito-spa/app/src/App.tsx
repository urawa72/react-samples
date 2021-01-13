import React from 'react';
import './App.css';
import AuthPrebuildUi from './components/AuthPrebuildUi';
import AuthHostedUi from './components/AuthHostedUi';
// import { Amplify, Auth } from 'aws-amplify';
// import { authConfig, oauthConfig } from './utils/aws-config';

// Amplify.configure(authConfig);
// Auth.configure(oauthConfig);

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT!;
//
// const helloWorld = async () => {
//   const res = await fetch(`${API_ENDPOINT}/hello`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${(await Auth.currentSession())
//         .getIdToken()
//         .getJwtToken()}`,
//     },
//   });
//   return await res.text();
// };

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <AuthPrebuildUi /> */}
      <AuthHostedUi />
    </div>
  );
};

export default App;
