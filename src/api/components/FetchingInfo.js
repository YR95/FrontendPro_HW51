export const API = 'https://64e61e4f09e64530d17f9d73.mockapi.io/api/heroes/';

 export async function controller(action, method = 'GET', body) {
  const URL = `${API}${action}`;
  const params = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    params.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(URL, params);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }

};

