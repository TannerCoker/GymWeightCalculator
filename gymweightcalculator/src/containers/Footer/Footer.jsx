import React from 'react'
import { FaGithub } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='app__footer-links'>
            <a href='https://github.com/TannerCoker' target='_blank'>
                <FaGithub size={32} />
            </a>
        </div>
    </div>
  )
}

export default Footer