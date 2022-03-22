const URL = "http://localhost:3001";

export async function login({ email, password }) {
  const response = await fetch(`http://localhost:3001/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  const responseJSON = await response.json()
  return responseJSON;
}

export async function register({ name, email, password }) {
  const response = await fetch(`http://localhost:3001/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
  const responseJSON = await response.json()
  return responseJSON;
}