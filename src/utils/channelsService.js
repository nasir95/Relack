import tokenService from "./tokenService";

const BASE_URL = "/api/channels";

export default {
  index,
  create
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
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
