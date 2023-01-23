import styles from './Login.module.css'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user);

  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.login}>

      <h3>Login</h3>

      <p>Get in the system and enjoy it!</p>

      <form onSubmit={handleSubmit}>

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

        {!loading && <button className='btn'>Login</button>}

        {loading && <button className='btn' disabled>Login...</button>}

        {error && <p className='error'>{error}</p>}

      </form>

    </div>
  )
}

export default Login