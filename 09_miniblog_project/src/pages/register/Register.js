import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("The passwords doesn't match!")
      return
    }

    console.log(user)

  }

  return (
    <div className={styles.register}>

      <h3>Create an account</h3>

      <p>Write a post and share your histories</p>

      <form onSubmit={handleSubmit}>

        <label>
          <input
            type="text"
            name="displayName"
            required
            placeholder='User Name'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            required
            placeholder='User Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            required
            placeholder='User Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder='Confirm User Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <button className='btn'>Register</button>

        {error && <p className='error'>{error}</p>}

      </form>

    </div>
  )
}

export default Register