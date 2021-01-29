import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE!;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT!;
/* eslint-enable */

export const useApi = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: AUTH0_AUDIENCE,
        });
        console.log('token:', token);
        const res = await axios.get(API_ENDPOINT, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setState({ ...state, data: res.data, loading: false });
      } catch (error) {
        setState({ ...state, error, loading: false });
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ...state };
};
