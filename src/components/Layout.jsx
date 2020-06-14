import React, { Fragment } from 'react'

import Navigation from './Navigation'

export default (props) => (
  <div className='layout'>
    <Navigation />
    {props.children}
  </div>
)
