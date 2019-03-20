import React from 'react'

class User extends React.Component {
  render() {
    console.log(this.props)
    return <li>{this.props.user.name}</li>
  }
}

export default User
