import React from 'react'

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  showCity() {
    this.state.isOpen = !this.state.isOpen
  }

  render() {
    return (
      <li>
        {this.props.user.name}
        <button onClick={this.showCity}>Click to display city</button>
        {this.state.isOpen && (
          <span style={{ fontWeight: 'bold' }}>
            {' '}
            - {this.props.user.address.city}{' '}
          </span>
        )}
      </li>
    )
  }
}

User.propTypes = {}

export default User
