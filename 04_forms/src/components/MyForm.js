import styles from './MyForm.module.css'

import { useState } from 'react'

const MyForm = ({ user }) => {

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState()
    const [role, setRole] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        name && email ? console.log('Sending...', name, email, bio, role) : alert('Full fields')

        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
        <div>
            <hr />
            <h3>Form</h3>

            <form onSubmit={handleSubmit}>

                {/* Op 1 */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="test"
                        name="name"
                        onChange={handleName}
                        value={name}
                    />
                </div>

                {/* Op 2 */}
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>

                <label>
                    <span>Bio:</span>
                    <textarea
                        name='bio'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    >
                    </textarea>
                </label>

                <label>
                    <span>System func</span>
                    <select name='role' onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>

                <input type="submit" value="Send" />

            </form>
        </div>
    )
}

export default MyForm