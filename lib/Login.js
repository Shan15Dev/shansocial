import { convertToSha512 } from "../lib/HashConverter.js";

export default async function Login({ username, password }) {
  let passwordSHA = convertToSha512(password);

  const response = await fetch("http://localhost:3001/users");
  const responseJSON = await response.json();

  for (let responseItter of responseJSON) {
    if (
      responseItter.username === username &&
      responseItter.password === passwordSHA
    ) {
      return responseItter;
    }
  }
  return "";
}
