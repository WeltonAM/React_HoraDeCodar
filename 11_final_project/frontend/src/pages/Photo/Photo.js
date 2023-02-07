import './Photo.css'

import { uploads } from '../../utils/config'
import Message from '../../components/Message'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getPhotoById, like } from '../../slices/photoSlice'
import PhotoItem from '../../components/PhotoItem'
import LikeContainer from '../../components/LikeContainer'

import { useResetComponentMessage } from '../../hooks/useResetComponentMessage'

const Photo = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch)

  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector((state) => state.photo)

  useEffect(() => {
    dispatch(getPhotoById(id))
  }, [dispatch, id])

  const handleLike = () => {
    dispatch(like(photo._id))

    resetMessage()
  }

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <div id='photo'>
      <PhotoItem photo={photo} />

      <LikeContainer photo={photo} user={user} handleLike={handleLike} />

      <div className='message-container'>
        {error && <Message msg={error} type="error" />}
        {error && <Message msg={message} type="success" />}
      </div>
    </div>
  )
}

export default Photo