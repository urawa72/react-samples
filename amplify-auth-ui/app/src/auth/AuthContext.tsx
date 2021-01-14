import React, { useContext } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';

interface IAuthContext {
  isAuthenticted: boolean;
  isLoading: boolean;
  user?: CognitoUser;
}

const initialContext: IAuthContext = {
  isAuthenticted: false,
  isLoading: false,
};

export const AuthContext = React.createContext(initialContext);
export const useAuth = () => useContext(AuthContext);
