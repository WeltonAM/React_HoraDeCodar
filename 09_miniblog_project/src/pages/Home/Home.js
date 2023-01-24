import styles from './Home.module.css'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetail from '../../components/PostDetail'

const Home = () => {

  const [query, setQuery] = useState("")
  const {documents: posts, loading} = useFetchDocuments("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query){
      return navigate(`/search?q=${query}`)
    }
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
        <button className='btn btn'>Search</button>
      </form>

      <div>
        {loading && <p>Loading...</p>}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
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