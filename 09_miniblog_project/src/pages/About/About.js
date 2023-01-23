import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About the Mini<span>Blog</span></h2>
      <p>This project is a React and Firebase made blog</p>

      <Link to="/posts/create" className='btn'>Create Post</Link>
    </div>
  )
}

export default About