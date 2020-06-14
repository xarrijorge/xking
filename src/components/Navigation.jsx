import React from 'react'
import { Link } from 'gatsby'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const mainNav = (props) => (
  <div className='navigation'>
    <Link to='/' className='logo'>
      <h3>xKing</h3>
    </Link>
    <div className='links'>
      <Link activeClassName='active' to='about'>
        About
      </Link>
      <Link activeClassName='active' to='work'>
        Work
      </Link>
      <Link activeClassName='active' to='about'>
        Contact
      </Link>
      <a
        href='https://www.instagram.com/?hl=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon />
      </a>
      <a
        href='https://web.facebook.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FacebookIcon />
      </a>
    </div>
  </div>
)

export default mainNav
