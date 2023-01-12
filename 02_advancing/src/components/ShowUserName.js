import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <hr />
        <h2>User name: {props.name}</h2>
    </div>
  )
}

export default ShowUserName