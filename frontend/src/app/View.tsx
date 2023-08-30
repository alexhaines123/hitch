'use client';

import { doOAuth } from '@/apis/external/google-oauth';
import Button from '@/components/Button';
import { useEffect } from 'react';
import { store } from '../state/store';
import { Provider } from 'react-redux';
import type { RootState } from '@/state/store';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from '@/state/slices/user';

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
  const email = useSelector((state: RootState) => state.user.email);
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      const url = new URL(window.location.href);
      const accessToken = url.href.match(/\#(?:access_token)\=([\S\s]*?)\&/);

      if (accessToken) {
        const endpoint = new URL('https://www.googleapis.com/userinfo/v2/me');

        endpoint.searchParams.set('access_token', accessToken[1]);
        const res = await fetch(endpoint.href);
        const response = await res.json();
        dispatch(setEmail(response.email));
      }
    };
    init();
  }, [dispatch]);

  return (
    <Provider store={store}>
      <main className="flex flex-col items-center p-24">
        <h1>HITCH</h1>
        {email && <div>Logged in as {email}</div>}
        <Button onClick={loginAction}>Login</Button>
      </main>
    </Provider>
  );
}
