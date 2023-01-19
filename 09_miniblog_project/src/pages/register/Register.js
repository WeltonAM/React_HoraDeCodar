import styles from './Register.module.css'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
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

    const res = await createUser(user);

  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

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

        {!loading && <button className='btn'>Register</button>}
        
        {loading && <button className='btn' disabled>Registering...</button>}

        {error && <p className='error'>{error}</p>}

      </form>

    </div>
  )
}

export default Register