import styles from './Home.module.css'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {

  const [query, setQuery] = useState("")

  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h3>See our most recent posts</h3>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder='Or search for tags...'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='btn btn-dark'>Search</button>
      </form>

      <div>
        <h3>Posts...</h3>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>No posts found</p>
            <Link to="/posts/create" className='btn'>Create a post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home