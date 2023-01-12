import styles from './Title.module.css'

function Title() {
  return (
    <div>
        <hr/>
        <h3>Css module</h3>

        <p className={styles['my-title']}>Holding style from module css</p>
    </div>
  )
}

export default Title