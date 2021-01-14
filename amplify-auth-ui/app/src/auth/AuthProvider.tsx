import React from 'react';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AuthContext } from './AuthContext';
import '@aws-amplify/ui/dist/style.css';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticted, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<CognitoUser>();

  useEffect(() => {
    (async () => {
      await checkAuthenticated();
      await currentAuthenticatedUser();
    })();
  }, []);

  const checkAuthenticated = async () => {
    setIsLoading(true);
    try {
      const session = await Auth.currentSession();
      if (session) setIsAuthenticated(true);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const currentAuthenticatedUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticted,
        isLoading,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
// @ts-ignore
// export default withAuthenticator(AuthProvider, {
//   usernameAttributes: 'email',
//   signUpConfig,
// });
