import { useRedirectToLogin } from '../lib/session'
import style from '../styles/Profile.module.css'


export default function ProfilePage({ session }) {
    useRedirectToLogin(session);


    return(
        <div>
            <h1 className={style.center}>{session.user.name}</h1>
            <p className={style.center}>{session.user.email}</p>
        </div>
    );
}
