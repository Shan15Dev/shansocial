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

export async function getAllPosts() {
  const response = await fetch("http://localhost:3001/posts");
  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data = await response.json();
  return data;
}

export async function getPostByName(name) {
  const response = await fetch(`http://localhost:3001/posts?name=${name}`)
  
  if (!response.ok) {
    throw Error(response.statusText)
  }
  
  const data = await response.json()
  return data;
}
export async function createPost(post, token) {
  const response = await fetch(`http://localhost:3001/posts/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
}
