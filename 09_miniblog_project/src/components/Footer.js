import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Write about you like most!</h3>
        <p>MiniBlog &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer