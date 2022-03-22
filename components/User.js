import { useRouter } from 'next/router'
import style from '../styles/User.module.css'

export default function User({ session }) {
    const router = useRouter()
    const goToProfile = (e) => {
        router.push("/profile")
    }

    const goToCreate = (e) => {
        router.push("/create")
    }
    const goToHome = (e) => {
        router.push("/")
    }
    return (
        <div>
            {
                session.user &&
                <div>
                    <div className={style.grid}>
                        <p>{session.user.name}</p>
                        <button className={style.loginButtons} onClick={(e) => goToHome()}>Home</button>
                        <button className={style.loginButtons} onClick={(e) => goToProfile()}>Profile</button>
                        <button className={style.loginButtons} onClick={(e) => goToCreate()}>Create</button>
                        <button onClick={session.logout} className={style.loginButtons}>LogOut</button>
                    </div>
                </div>
            }
            {
                !session.user && <a href="/login"><button className={`${style.loginButtons} ${style.marginTop18perc}`}>Log In</button></a>
            }
        </div>
    )
}