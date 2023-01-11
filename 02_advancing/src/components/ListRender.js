import { useState } from 'react'

const ListRender = () => {
    const [users] = useState([
        { id: 1, name: "Juliana", age: 27},
        { id: 2, name: "Karla", age: 27},
    ])

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender