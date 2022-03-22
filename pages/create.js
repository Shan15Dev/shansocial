import { useState } from "react";
import styles from "../styles/Home.module.css";
import {createPost} from "../lib/api"
import {useRouter} from "next/router"

export default function CreatePage({ session }) {
    const router = useRouter()
    const [text, setText] = useState("")
    var today = new Date()

    const createPostSubmit = async () => {
        const model = {
            text: text,
            postDate: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            name: session.user.name,
            userId: session.user.id
        };
        await createPost(model, session.accessToken);

        router.push("/profile");
    }

    return (
        <div>
            <input
                placeholder="Text"
                className={styles.input}
                name="text"
                type='text'
                size={100}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <input
                type="submit"
                className={`${styles.submit} ${styles.marginLeft5percent}`}
                onClick={(e) => createPostSubmit()}
            ></input>
        </div>
    )
}