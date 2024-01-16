import React from 'react'
import { Banner } from '../../components';

import './Header.css';

const Header = () => {
  return (
    <div className='app__header section__padding'>
      <div className='app__header-info'>
        <p className='p__teko'>Adjust the values of the loaded plates to calculate the total weight</p>
      </div>
    </div>
  )
}

export default Header