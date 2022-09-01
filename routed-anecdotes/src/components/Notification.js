import React from 'react'

const Notification = ({ notification }) => {
  if (notification) {
    return <h4>{notification}</h4>
  }

  return null
}

export default Notification
