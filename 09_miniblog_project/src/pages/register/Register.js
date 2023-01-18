import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>

      <h3>Create an account</h3>

      <p>Write a post and share your histories</p>

      <form>

        <label>
          <span>Name:</span>
          <input type="text" name="displayName" required placeholder='User Name' />
        </label>

        <label>
          <span>Email:</span>
          <input type="email" name="email" required placeholder='User Email' />
        </label>

        <label>
          <span>Password:</span>
          <input type="password" name="password" required placeholder='User Password' />
        </label>

        <label>
          <span>Confirm Password:</span>
          <input type="password" name="confirmPassword" required placeholder='Confirm User Password' />
        </label>

        <button className='btn'>Register</button>

      </form>

    </div>
  )
}

export default Register