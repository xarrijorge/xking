import React from 'react'
import Layout from '../components/Layout'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

export default () => (
  <Layout>
    <div className='about'>
      <div className='bio'>
        <h1>Kings Xpirence</h1>
        <div className='social'>
          <InstagramIcon />
          <FacebookIcon />
        </div>
        <p className='email'>whatsup@kingsxpirence.com</p>
      </div>
      <div className='info'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  </Layout>
)
