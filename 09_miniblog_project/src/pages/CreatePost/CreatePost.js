import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { user } = useAuthValue()

  const { insertDocument, response } = useInsertDocument("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormError("")

    try {
      new URL(image)
    } catch (error) {
      setFormError("You need to send a URL to the image")
    }

    const tagsArray = tags.split(", ").map((tag) => tag.trim().toLowerCase())

    if(!title || !image || !tags || !body){
      setFormError("Fill the fields before sending!")
    }

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    navigate("/")

  }

  return (
    <div className={styles.create_post}>

      <h3>Create a post</h3>

      <p>Write about any knowledge you'd like the world should know about</p>

      <form onSubmit={handleSubmit}>
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

        {!response.loading && <button className='btn'>Create post</button>}

        {response.loading && <button className='btn' disabled>Creating...</button>}

        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}
      </form>


    </div>
  )
}

export default CreatePost