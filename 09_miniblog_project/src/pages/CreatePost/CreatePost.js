import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>
 
      <h3>Create a post</h3>

      <p>Write about any knowledge you'd like the world should know about</p>

      <form>
        <label>
          <span>Title:</span>
          <input
            type="text"
            name="title"
            required
            placeholder='Have a nice first impression...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Image URL:</span>
          <input
            type="text"
            name="image"
            required
            placeholder='Insert an image that sums the post...'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Content:</span>
          <textarea
            name='body'
            required
            rows={10}
            placeholder='Write your knowledge...'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder='Use COMMAS "," to separate the TAGS'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>

        <button className='btn'>Create Post</button>
      </form>
{/* 
      {!loading && <button className='btn'>Register</button>}

      {loading && <button className='btn' disabled>Registering...</button>}

      {error && <p className='error'>{error}</p>} */}

    </div>
  )
}

export default CreatePost