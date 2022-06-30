import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {

  return (
    <div className='error-block'>
        <h1 className='header-404'>404 - Page Not Found!</h1>
        <p>Sorry that url was not available. Please click below to go back to our home page.</p>
        <NavLink className="error-nav" exact to="/">Go back home</NavLink>
    </div>
  )
}

export default NotFound
