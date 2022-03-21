const URL = "http://localhost:3001";

export async function login({ username, password }) {
  const response = await fetch(`http://localhost:3001/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })


  })
  const responseJSON = await response.json()
  return responseJSON;
}