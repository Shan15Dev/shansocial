import styles from '../styles/Header.module.css'
import User from './User'

export default function Header({session}){
    return(
        <div className={styles.grid}>
            <h1 className={styles.textPaddingLeft}>ShanSocial</h1>
            <User session={session} />
        </div>
    )
}