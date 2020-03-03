import React from 'react'
import { render } from '@testing-library/react'

import User from './User'

import mockUser from '../sampleUser.json'

const setupUser = (props = { user: mockUser }) => render(<User {...props} />)

describe('<User />', () => {
  it('should display user"s address city when display city is toggled', () => {
    setupUser()
  })
})
