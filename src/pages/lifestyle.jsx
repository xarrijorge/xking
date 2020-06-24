import React from 'react'
import Layout from '../components/Layout'

import * as life from '../images/lifestyle/index'

export default () => (
  <Layout>
    <div className='description'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
    <ul className='mondrian'>
      <li className='vertLong'>
        <img src={life.Reef} alt='' />
      </li>
      <li className='single'>
        <img src={life.StairWorkOut} alt='' />
      </li>
      <li className='big'>
        <img src={life.Camping} alt='' />
      </li>
      <li className='single'>
        <img src={life.Tokyo} alt='' />
      </li>
      <li className='vertLong'>
        <img src={life.GoodVibe} alt='' />
      </li>
      <li className='vertMid'>
        <img src={life.Jumping} alt='' />
      </li>
      <li className='vertLong'>
        <img src={life.Coffee} alt='' />
      </li>
      <li className='single'>
        <img src={life.CrabBeach} alt='' />
      </li>
      <li className='single'>
        <img src={life.PlayBall} alt='' />
      </li>
    </ul>
  </Layout>
)
