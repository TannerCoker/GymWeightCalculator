import React from 'react'
import { Header, BarbellCalculator } from './containers';
import { Banner } from './components';

import './App.css';

const App = () => {
  return (
    <div className='app__bg app__wrapper'>
      <Banner title='Plate Calculator'/>
      <Header />
      <BarbellCalculator />
    </div>
  )
}

export default App
