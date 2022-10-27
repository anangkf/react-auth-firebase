import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <p>Please login <Link to='/login'>here</Link></p>
    </div>
  )
}

export default Landing