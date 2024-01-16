import React from 'react'

import './Banner.css';

const Banner = ({title}) => {
  return (
    <div className='app__banner'>
      <div className='app__banner-title'>
      <h1 className='headtext__teko'>{title}</h1>
      </div>
    </div>
  )
}

export default Banner