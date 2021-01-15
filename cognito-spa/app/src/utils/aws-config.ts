// https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID!;
const WEB_CLIENT_ID = process.env.REACT_APP_WEB_CLIENT_ID!;
const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN!;
const APP_DOMAIN = process.env.REACT_APP_APP_DOMAIN!;
const APP_URL = process.env.REACT_APP_APP_URL!;
/* eslint-enable */

// for prebuild ui
export const authConfig = {
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: CLIENT_ID,
    userPoolWebClientId: WEB_CLIENT_ID,
    cookieStorage: {
      domain: APP_DOMAIN,
      expires: 1,
      sameSite: 'lax',
      secure: false, // if https, set true
    },
  },
};

// for hosted ui
export const oauthConfig = {
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: CLIENT_ID,
    userPoolWebClientId: WEB_CLIENT_ID,
    cookieStorage: {
      domain: APP_DOMAIN,
      expires: 1,
      sameSite: 'lax',
      secure: true, // if https, set true
    },
    // OPTIONAL - Hosted UI configuration
    oauth: {
      domain: AUTH_DOMAIN,
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      redirectSignIn: APP_URL,
      redirectSignOut: APP_URL,
      responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
};
