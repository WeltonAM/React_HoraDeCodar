const UserDetail = ({ people }) => {

    return (
        <div>
            <hr />
            <h3>User Detail:</h3>

            {people.map((person) => (
                <p key={person.id}>
                    {person.age >=18 && <p>{person.name} can drive!</p>}
                </p>
            ))}
        </div>
    )
}


export default UserDetail