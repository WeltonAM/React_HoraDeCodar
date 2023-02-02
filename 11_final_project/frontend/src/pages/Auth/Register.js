import './Auth.css'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Register = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="register">
      <h2>ReactGram</h2>

      <p className='subtitle'>Sign in to see your friends photos and share yours!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' />
        
        <input type="email" placeholder='Email' />
        
        <input type="password" placeholder='Password'/>
        
        <input type="password" placeholder='Confirm Password' />
        
        <input type="submit" value="Sign up" />
      </form>

      <p>
        Have already an account? <Link to='/'>Login!</Link> 
      </p>
    </div>
  )
}

export default Register