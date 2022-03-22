import styles from "../styles/Home.module.css";
import { useState, useRef } from "react"
import { createPost } from "../lib/api"
import { useRouter } from "next/router"

export default function CreatePage({ session }) {
    var today = new Date()
    const router = useRouter()
    const [text, setText] = useState("")
    const [picturePath, setPicturePath] = useState("")

    const createPostSubmit = async () => {
        const model = {
            text: text,
            postDate: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            name: session.user.name,
            userId: session.user.id,
            picturePath: picturePath 
        };
        await createPost(model, session.accessToken);

        router.push("/profile");
    }


    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })


    const [base64Image, setBase64Image] = useState("")

    const fileInput = useRef(null)
    const onFileInputChange = async (e) => {
        const file = fileInput.current.files[0]
        if (!file) {
            return
        }
        const base64 = await toBase64(file)
        setBase64Image(base64)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!base64Image) return

        const response = await fetch("/api/upload", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                base64Image
            })
        })

        const data = await response.json()
        setPicturePath(data.filePath)
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
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>

                    <label>Image:</label>
                    <input
                        type="file"
                        accept=".png,.jpg"
                        ref={fileInput}
                        onChange={onFileInputChange}
                    />

                    {base64Image && <img src={base64Image} style={{ width: "300px", height: "auto" }} />}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}