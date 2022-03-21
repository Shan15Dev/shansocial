import styles from "../styles/Home.module.css";

export default function Home({session}) {
  return (
    <div>
        <h1>Hello</h1>
        {
          session.user &&
          <div>
            <h1>LogedIn</h1>
          </div>
        }
    </div>
  );
}
  