import React from 'react'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.showCity = this.showCity.bind(this)
  }

  showCity() {
    this.state.isOpen = !this.state.isOpen
  }

  render() {
    return (
      <div>
        <li title="Click to display city" onClick={this.showCity}>
          {this.props.user.name}
          {this.state.isOpen && (
            <span style={{ fontWeight: 'bold' }}>
              {' '}
              - {this.props.user.address.city}{' '}
            </span>
          )}
        </li>
      </div>
    )
  }
}

export default User
