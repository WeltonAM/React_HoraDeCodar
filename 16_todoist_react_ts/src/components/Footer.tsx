import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy;Todoist - {new Date().getFullYear()}</p>

            <a href="https://github.com/WeltonAM" target="_blank">By WeltonMatosDev</a>

            <a href="https://horadecodar.com.br/" target="_blank">At HoraDeCodar</a>
        </footer>
    )
}

export default Footer