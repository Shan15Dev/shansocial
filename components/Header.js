import styles from '../styles/Header.module.css'

export default function Header(){
    return(
        <div className={styles.grid}>
            <h1 className={styles.textPaddingLeft}>ShanSocial</h1>
            <p>“Don’t say anything online that you wouldn’t want plastered on a billboard with your face on it.”</p>
        </div>
    )
}