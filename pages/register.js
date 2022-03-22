import { useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import { register } from "../lib/api";
import { useRouter } from "next/router";
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
})

export default function RegisterScreen({ session }) {
    const router = useRouter();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [photoPath, setPhotoPath] = useState("");

    const submit = async (e) => {
        const model = {
            name: nameInput,
            email: emailInput,
            password: passwordInput,
            picturePath: photoPath
        };
        await register(model);

        router.push("/login");
        console.log(session)
    }; const [base64Image, setBase64Image] = useState("")

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

        setPhotoPath(data.filePath)
    }



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
            </div>
        </div>
    );
}
