'use client';

import { doOAuth } from '@/apis/external/google-oauth';
import Button from '@/components/Button';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { apolloClient } from '../graphql';
import {ApolloProvider } from '@apollo/client';

const CLIENT_ID =
  '1033575429085-600btkuju2l57h7gpbshvl1vrqapb8ro.apps.googleusercontent.com';
const REDIRECT_URI = 'https://bac7-92-236-107-192.ngrok-free.app';

const googleOAuthConfig = {
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  scope: 'email',
};

const loginAction = () => doOAuth(googleOAuthConfig);

export default function Page() {
  const dispatch = useDispatch();

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <main className="flex flex-col items-center p-24">
          <h1>HITCH</h1>
          <Button onClick={loginAction}>Login</Button>
        </main>
      </ApolloProvider>
    </>
  );
}
