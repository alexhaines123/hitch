'use client';

import { doOAuth } from '@/apis/external/google-oauth';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';

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
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    const init = async () => {
      const url = new URL(window.location.href);
      const accessToken = url.href.match(/\#(?:access_token)\=([\S\s]*?)\&/);
      
      if (accessToken) {
        const endpoint = new URL('https://www.googleapis.com/userinfo/v2/me');

        endpoint.searchParams.set('access_token', accessToken[1]);
        const res = await fetch(endpoint.href);
        const response = await res.json();
        setEmail(response.email);
      }
    };
    init();
  }, []);

  return (
    <main className="flex flex-col items-center p-24">
      <h1>HITCH</h1>
      Logged in as {email}
      <Button onClick={loginAction}>Login</Button>
    </main>
  );
}
