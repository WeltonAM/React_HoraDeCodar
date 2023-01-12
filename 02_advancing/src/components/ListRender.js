import { useState } from 'react'

const ListRender = () => {

    const [users, setUsers] = useState([
        { id: 1, name: "Juliana", age: 27},
        { id: 2, name: "Karla", age: 27},
        { id: 3, name: "Ceci", age: 4},
        { id: 4, name: "Rafa", age: 10},
        { id: 5, name: "Totobibi", age: 1},
    ])

    const randomDelete = () => {
        const randomNum = Math.ceil(Math.random() * (users.length + 1))

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNum !== user.id) 
        })
    }

    return (
        <div className='listData'>
            <hr />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>

            <button onClick={randomDelete}>Delete random user</button>
        </div>
    )
}

export default ListRender