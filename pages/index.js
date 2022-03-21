import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div>
      <form className={styles.form}>
        <input
          placeholder="Username"
          className={styles.input}
          name="username"
          size={100}
        ></input>
        <input
          placeholder="Password"
          className={styles.input}
          name='password'
          size={100}
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
          <p></p>
        </div>
      </form>
    </div>
  );
}
