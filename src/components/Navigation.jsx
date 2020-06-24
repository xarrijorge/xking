import React from 'react'
import { Link } from 'gatsby'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

import Logo from '../images/logo.png'

const mainNav = (props) => (
  <div className='navigation'>
    <Link to='/' className='logo'>
      <img src={Logo} alt='' />
    </Link>
    <div className='links'>
      <Link activeClassName='active' to='/' className='link'>
        Work
      </Link>
      <Link activeClassName='active' to='about' className='link'>
        About
      </Link>
      <Link activeClassName='active' to='contact' className='link'>
        Contact
      </Link>
      <a
        href='https://www.instagram.com/?hl=en'
        target='_blank'
        rel='noopener noreferrer'
        className='icon'
      >
        <InstagramIcon />
      </a>
      <a
        href='https://web.facebook.com/'
        target='_blank'
        rel='noopener noreferrer'
        className='icon'
      >
        <FacebookIcon />
      </a>
    </div>
  </div>
)

export default mainNav
