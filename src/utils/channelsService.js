import tokenService from "./tokenService";

const BASE_URL = "/api/dashboard";

export default {
  index,
  create,
  createMessage,
  indexMessage
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function indexMessage(idx) {
  return fetch(BASE_URL + `/${idx}`).then(res => res.json());
}

function create(channel) {
  console.log(channel);
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: tokenService.getToken()
    },

    body: JSON.stringify(channel)
  };
  console.log(options);
  return fetch(BASE_URL, options).then(res => {
    console.log(res);
    if (res.ok) return res.json();
    throw new Error("Bad Credentials!");
  });
}

function createMessage(message, idx) {
  console.log(message);
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: tokenService.getToken()
    },

    body: JSON.stringify(message)
  };
  console.log(options);
  return fetch(BASE_URL + `/${idx}`, options).then(res => {
    console.log(res);
    if (res.ok) return res.json();
    throw new Error("Bad Credentials!");
  });
}
