import { useState } from "react";
import styles from "../styles/Home.module.css";
import { login } from "../lib/api";
import { useRouter } from "next/router";


export default function LoginScreen({ session }) {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const submit = async (e) => {
    const model = {
      email: emailInput,
      password: passwordInput,
    };
    const resp = await login(model);

    session.login(resp);
    router.push("/");
    console.log(session)
  };

  return (
    <div>
      <div className={styles.form}>
        <input
          placeholder="E-Mail"
          className={styles.input}
          name="email"
          type='text'
          size={100}
          onChange={(e) => setEmailInput(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          className={styles.input}
          name="password"
          size={100}
          type='password'
          onChange={(e) => setPasswordInput(e.target.value)}
        ></input>
        <div className={styles.grid}>
          <input
            type="submit"
            className={styles.submit}
            value="Sign  in"
            onClick={(e) => submit()}
          ></input>
          <input
            type="submit"
            className={`${styles.submit} ${styles.marginLeft5percent}`}
            value="Register"
          ></input>
        </div>
      </div>
    </div>
  );
}
