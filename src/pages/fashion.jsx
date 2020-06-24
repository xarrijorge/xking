import React from 'react'
import Layout from '../components/Layout'

import * as fash from '../images/fashion/index'

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
        <img src={fash.KidSwag} alt='' />
      </li>
      <li className='single'>
        <img src={fash.AirNike} alt='' />
      </li>
      <li className='big'>
        <img src={fash.RedTop} alt='' />
      </li>
      <li className='single'>
        <img src={fash.Dress} alt='' />
      </li>

      <li className='vertLong'>
        <img src={fash.JumpSuit} alt='' />
      </li>
      <li className='vertMid'>
        <img src={fash.AllStart} alt='' />
      </li>
      <li className='vertLong'>
        <img src={fash.FlowerShoe} alt='' />
      </li>
      <li className='single'>
        <img src={fash.SweatShirt} alt='' />
      </li>
      <li className='single'>
        <img src={fash.RedWedding} alt='' />
      </li>
    </ul>
  </Layout>
)
