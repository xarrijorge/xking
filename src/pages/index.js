import React, { useState } from 'react'
import { Link } from 'gatsby'

import fashion from '../images/fashion.jpg'
import food from '../images/food.jpg'
import lifeStyle from '../images/lifestyle.jpg'
import main from '../images/main.jpg'

import '../styles/normalize.css'
import '../styles/main.scss'

import SEO from '../components/seo'

function IndexPage() {
  const [background, setBackground] = useState(main)

  const fasBackground = () => setBackground(fashion)

  return (
    <div className='home' style={{ 'background-image': `url(${background})` }}>
      <SEO title='Home' />
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
  )
}

export default IndexPage
