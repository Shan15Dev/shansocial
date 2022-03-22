import { useRouter } from 'next/router'
import style from '../styles/User.module.css'

export default function User({ session }) {
    const router = useRouter()
    const goToProfile = (e) =>{
        router.push("/profile")
    }
    return (
        <div>
            {
                session.user &&
                <div>
                    <div className={style.grid}>
                        <p>{session.user.name}</p>
                        <button onClick={session.logout} className={style.loginButtons}>LogOut</button>
                        <button className={style.loginButtons} onClick={(e) => goToProfile()}>Profile</button>
                    </div>
                </div>
            }
            {
                !session.user && <a href="/login"><button className={`${style.loginButtons} ${style.marginTop18perc}`}>Log In</button></a>
            }
        </div>
    )
}