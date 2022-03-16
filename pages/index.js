import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <form className={styles.form}>
        <input placeholder="Username" className={styles.input} size={100}></input>
        <input placeholder="Password" className={styles.input} size={100}></input>
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
