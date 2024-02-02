import React from 'react'
import { Header, BarbellCalculator, Footer } from './containers';
import { Banner } from './components';
import { inject } from '@vercel/analytics';

import './App.css';

const App = () => {
  inject();
  return (
    <div className='app__bg app__wrapper'>
      <Banner title='Plate Calculator'/>
      <Header />
      <BarbellCalculator />
      <Footer />
    </div>
    
  )
}

export default App
