import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function LoginScreen() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  return (
    <div>
      <form className={styles.form}>
        <input
          placeholder="Username"
          className={styles.input}
          name="username"
          size={100}
          onChange={(e) => setUsernameInput(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          className={styles.input}
          name="password"
          size={100}
          onChange={(e) => setPasswordInput(e.target.value)}
        ></input>
        <div className={styles.grid}>
          <input
            type="submit"
            className={styles.submit}
            value="Sign  in"
          ></input>
          <input
            type="submit"
            className={`${styles.submit} ${styles.marginLeft5percent}`}
            value="Register"
          ></input>
        </div>
      </form>
    </div>
  );
}
