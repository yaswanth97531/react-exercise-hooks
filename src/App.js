import React from 'react'

import sampleUser from './sampleUser.json'
import User from './components/User'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          <User user={sampleUser} />
          <User user={sampleUser} />
          <User user={sampleUser} />
        </ul>
      </div>
    )
  }
}

export default App
