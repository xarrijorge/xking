import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import fashion from '../images/fashion.jpg'
import food from '../images/food.jpg'
import lifeStyle from '../images/lifestyle.jpg'
import main from '../images/main.jpg'

import '../styles/normalize.css'
import '../styles/main.scss'

import SEO from '../components/seo'
// import Layout from '../components/Layout'
import Navigation from '../components/Navigation'

function IndexPage() {
  const [background, setBackground] = useState(main)
  useEffect(() => {
    setBackground(fashion)
    setBackground(food)
    setBackground(lifeStyle)
    setBackground(main)
  }, [])

  return (
    <div
      className='homeLayout'
      style={{ 'background-image': `url(${background})` }}
    >
      <SEO title='Home' />
      <Navigation />
      <div className='home'>
        <div className='homeNav'>
          <Link
            className='fashion'
            onMouseEnter={() => setBackground(fashion)}
            onMouseLeave={() => setBackground(main)}
          >
            Fashion
          </Link>
          <Link
            onMouseEnter={() => setBackground(lifeStyle)}
            onMouseLeave={() => setBackground(main)}
          >
            Lifestyle
          </Link>
          <Link
            onMouseEnter={() => setBackground(food)}
            onMouseLeave={() => setBackground(main)}
          >
            Food
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
