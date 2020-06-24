import React from 'react'
import Layout from '../components/Layout'

import * as food from '../images/food/index'

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
        <img src={food.icecream} alt='' />
      </li>
      <li className='single'>
        <img src={food.soup} alt='' />
      </li>
      <li className='single'>
        <img src={food.chorrillos} alt='' />
      </li>
      <li className='big'>
        <img src={food.pizza} alt='' />
      </li>

      <li className='vertLong'>
        <img src={food.meatball} alt='' />
      </li>
      <li className='vertMid'>
        <img src={food.sandwich} alt='' />
      </li>
      <li className='vertLong'>
        <img src={food.salad} alt='' />
      </li>
      <li className='single'>
        <img src={food.starter} alt='' />
      </li>
      <li className='single'>
        <img src={food.steak} alt='' />
      </li>
    </ul>
  </Layout>
)
