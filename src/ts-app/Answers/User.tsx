import React, { useState } from 'react'
import { IUserProps } from './types'
import { CLICK_TO_DISPLAY_CITY_TEXT } from '../../contants'

const User: React.FC<IUserProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)

  const showCity = () => {
    setIsOpen(!isOpen)
  }
  const {
    name,
    address: { city }
  } = user
  return (
    <li>
      {name}
      <button onClick={showCity}>{CLICK_TO_DISPLAY_CITY_TEXT}</button>
      {isOpen && <span style={{ fontWeight: 'bold' }}> - {city} </span>}
    </li>
  )
}

export default User
