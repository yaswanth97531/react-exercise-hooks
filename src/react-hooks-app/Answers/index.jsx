import React from 'react'
import sampleUser from '../../sampleUser.json'
import User from './User'
import Users from './Users'
import {
  USERS_TEXT,
  USERS_FETCHED_FROM_SERVICE_TEXT
} from '../../contants'

const ReactHooksAnswersApp = () => {
  return (
    <div>
      <h1>{USERS_TEXT}</h1>
      <ul>
        <User user={sampleUser} />
        <User user={sampleUser} />
        <User user={sampleUser} />
      </ul>
      <h1>{USERS_FETCHED_FROM_SERVICE_TEXT}</h1>
      <Users />
    </div>
  )
}

export default ReactHooksAnswersApp
