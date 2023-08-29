const GOOGLE_OAUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth';

interface OAuthParameters {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
}
const endpointBuilder = (params: OAuthParameters) => {
  const url = new URL(GOOGLE_OAUTH_ENDPOINT);

  url.searchParams.set('client_id', params.client_id)
  url.searchParams.set('scope', params.scope);
  url.searchParams.set('redirect_uri', params.redirect_uri)
  url.searchParams.set('response_type', params.response_type)

  return url.href;
}

interface GoogleOAuthConfig {
  client_id: string;
  redirect_uri: string;
  scope: string;
}
export const doOAuth = (config: GoogleOAuthConfig) => {
  const params: OAuthParameters = {
    client_id: config.client_id,
    redirect_uri: config.redirect_uri,
    scope: config.scope,
    response_type: 'token',
  }

  const endpoint = endpointBuilder(params);

  doRedirect(endpoint);
}

const doRedirect = (url: string) => {
  window.location.replace(url);
}
