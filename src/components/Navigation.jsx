import React from 'react'
import { Link } from 'gatsby'

export default (props) => (
  <div className='base navigation'>
    <Link to='/'>
      <img src={logo} alt='logo image' className='logo' />
    </Link>
    <div>
      <Link activeClassName='active' to='about'>
        About
      </Link>
    </div>
  </div>
)
