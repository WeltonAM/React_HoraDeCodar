import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Write about you like most!</h3>
        <p>MiniBlog &copy; {new Date().getFullYear()}</p>
        <p>By <a href="https://github.com/WeltonAM" target="_blank">WeltonMatosDev</a></p>
    </footer>
  )
}

export default Footer