import { useState } from "react";
import styles from "../styles/Home.module.css";
import { register } from "../lib/api";
import { useRouter } from "next/router";


export default function RegisterScreen({ session }) {
    const router = useRouter();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    const submit = async (e) => {
        const model = {
            name: nameInput,
            email: emailInput,
            password: passwordInput,
        };
        await register(model);

        router.push("/login");
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
                    placeholder="Name"
                    className={styles.input}
                    name="name"
                    type='text'
                    size={100}
                    onChange={(e) => setNameInput(e.target.value)}
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
                        className={`${styles.submit} ${styles.marginLeft5percent}`}
                        value="Register"
                        onClick={(e) => submit()}
                    ></input>
                </div>
            </div>
        </div>
    );
}
