import './Auth.css'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user);
  }

  return (
    <div id="register">
      <h2>ReactGram</h2>

      <p className='subtitle'>Sign in to see your friends photos and share yours!</p>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Name' 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
        />
        
        <input 
          type="email" 
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        
        <input 
          type="password"  
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
        
        <input 
          type="password" 
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)} 
          value={confirmPassword} 
        />
        
        <input type="submit" value="Sign up" />
      </form>

      <p>
        Have already an account? <Link to='/'>Login!</Link> 
      </p>
    </div>
  )
}

export default Register