import styles from './EditPost.module.css'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditPost = () => {

  const { id } = useParams()
  const { document: post } = useFetchDocument("posts", id)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)

      const textTags = post.tagsArray.join(', ')

      setTags(textTags)
    }
  }, [post])

  const { user } = useAuthValue()

  const { updateDocument, response } = useUpdateDocument("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormError("")

    try {
      new URL(image)
    } catch (error) {
      setFormError("You need to send a URL to the image")
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    if (!title || !image || !tags || !body) {
      setFormError("Fill the fields before sending!")
    }

    if (formError) return

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data)

    navigate("/dashboard")

  }

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h3>Edit: {post.title}</h3>

          <p>Alter post data</p>

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

            <p className={styles.preview_title}>Image preview:</p>
            <img className={styles.image_preview} src={post.image} alt="" />

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

            {!response.loading && <button className='btn'>Edit post</button>}

            {response.loading && <button className='btn' disabled>Creating...</button>}

            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}
          </form>
        </>
      )}

    </div>
  )
}

export default EditPost