import React, { useState } from 'react'
import User from './User'

// problem 2: write code as suggested by comments below
const Users = () => {
  const [users, setUsers] = useState([])
  // using useEffect with ES6 syntax to finish the code to
  // fetch users whose data structure is an array of user object
  // given :
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  return (
    <ul>
      {/* write code to show the list of users fetched from above  */}
        <User user={user} />
    </ul>
  )
}

export default Users
