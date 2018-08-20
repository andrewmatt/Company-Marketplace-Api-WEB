// Using these helper methods, you can just call api.post(/url, data) in a redux action and receive 
//the json success or error response. Also, each request will include the jwt used for authentication 
//in an Authorization: Bearer header if it is present in localStorage.

const API = process.env.REACT_APP_API_URL;

function headers() {
  const token = JSON.parse(localStorage.getItem('token'));

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer: ${token}`,
  };
}

function parseResponse(response) {
  return response.json().then((json) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });
}

export default {
  get(url) {
    return fetch(`${API}${url}`, {
      method: 'GET',
      headers: headers(),
    })
    .then(parseResponse)
    .catch((reason) =>
    {
      console.log("Handle Rejected Promise", reason);
    });
  },

  post(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${API}${url}`, {
      method: 'POST',
      headers: headers(),
      body,
    })
    .then(parseResponse)
    .catch((reason) =>
    {
      console.log("Handle Rejected Promise", reason);
    });
  },

  patch(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${API}${url}`, {
      method: 'PATCH',
      headers: headers(),
      body,
    })
    .then(parseResponse)
    .catch((reason) =>
    {
      console.log("Handle Rejected Promise", reason);
    });
  },

  delete(url) {
    return fetch(`${API}${url}`, {
      method: 'DELETE',
      headers: headers(),
    })
    .then(parseResponse)
    .catch((reason) =>
    {
      console.log("Handle Rejected Promise:", reason);
    });
  },
};