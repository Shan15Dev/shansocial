import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <form className={styles.form}>
        <input placeholder="Username" className={styles.input}></input>
        <input placeholder="Password"  className={styles.input}></input>
        <button>Log In</button>
      </form>
    </div>
  );
}
