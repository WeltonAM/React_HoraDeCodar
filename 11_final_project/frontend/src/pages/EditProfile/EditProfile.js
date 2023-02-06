import './EditProfile.css'

const EditProfile = () => {

  const handelSubmit = (e) => {
    e.preventDefault()


  }

  return (
    <div id='edit-profile'>
        <h2>Edit your profile</h2>
        <p className='subtitle'>Add an image and tell more about you...</p>

        <form onSubmit={handelSubmit}>

            <input type="text" placeholder='Name' />

            <input type="email" placeholder='Email' disabled />

            <label>
                <span>Profile Image</span>
                <input type="file" />
            </label>

            <label>
                <span>Bio:</span>
                <input type="text" placeholder='Profile description' />
            </label>

            
            <label>
                <span>Change password</span>
                <input type="password" placeholder='Enter a new password' />
            </label>

            <input type="submit" value="Update" />

        </form>
    </div>
  )
}

export default EditProfile