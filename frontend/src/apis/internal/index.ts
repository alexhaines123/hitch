const ENDPOINT = 'http://localhost:3001'

interface queryParams {
  name: string;
  value: string;
}

interface Body {
  name: string;
  value: string;
}

interface AppRequest {
  path: string;
  queryParams?: queryParams[];
  body?: Body[];
  method: string;
}

export const appRequest = async ({ path, queryParams, body, method }: AppRequest) => {
  const url = new URL(`${ENDPOINT}/${path}`);

  if (queryParams) {
    for (const param of queryParams) {
      url.searchParams.set(param.name, param.value)
    }
  }

  const options = {
    method, // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) })
  }

  const response = await fetch(url.href, options);
  return response;
}