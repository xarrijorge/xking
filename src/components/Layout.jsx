import React from 'react'

import { MainNav, MobileNav } from './Navigation'

export default (props) => (
  <div className='layout'>
    <MobileNav />
    <MainNav />
    {props.children}
  </div>
)
