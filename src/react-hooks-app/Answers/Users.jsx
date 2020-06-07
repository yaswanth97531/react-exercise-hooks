import React, { useEffect, useState } from 'react'
import User from './User'

const Users = () => {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(users => {
        return [...users, ...data]
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  )
}

export default Users
