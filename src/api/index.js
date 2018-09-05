// Using these helper methods, you can just call api.post(/url, data) in a redux action and receive 
//the json success or error response. Also, each request will include the jwt used for authentication 
//in an Authorization: Bearer header if it is present in localStorage.

const API = process.env.REACT_APP_API_URL;

function headers() {
  
  // this method sets the headers and the Bearer authorization Token
  
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
    // GETs the link from the API, applies headers (Used for getByID and getAll).
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
    // POSTs the link to the API, applies headers (Used for Add).
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
    //PATCHes the link to the API, applies headers (Used for Update).
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
    //DELETEs from a specific ID that is passed (Used for Delete).
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
