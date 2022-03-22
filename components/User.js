import style from '../styles/User.module.css'

export default function User({ session }) {
    return (
        <div>
            {
                session.user && 
                <div>
                    <p>{session.user.name}</p>
                    <button onClick={session.logout} className={style.loginButtons}>LogOut</button>
                </div>
            }
            {
                !session.user && <a href="/login"><button className={`${style.loginButtons} ${style.marginTop18perc}`}>Log In</button></a>
            }
        </div>
    )
}