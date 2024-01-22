import { React, useState } from 'react';
import { BbCalcRow } from '../../components';

import './BarbellCalculator.css';

const BarbellCalculator = () => {

  const [distribution, setDistribution] = useState(true);
  const [numOf45s, setNumOf45s] = useState(0);
  const [numOf35s, setNumOf35s] = useState(0);
  const [numOf25s, setNumOf25s] = useState(0);
  const [numOf10s, setNumOf10s] = useState(0);
  const [numOf5s, setNumOf5s] = useState(0);
  const [numOf2_5s, setNum2_5s] = useState(0);

  const updateDistro = (distro) => {
    setDistribution(distro);
    console.log(distribution);
  }

  return (
    <div className='app__bbCalc'>
      <div className='app__bbCalc-card'>
        <div className='app__bbCalc-card_body'>
          <div className='app__bbCalc-card_body-plates'>
            <p className='p__teko'>Value is calculated as X number of plates on both sides</p>
            <BbCalcRow text='45Ibs plates:' plate={numOf45s} setPlate={setNumOf45s}/>
            <BbCalcRow text='35Ibs plates:' plate={numOf35s} setPlate={setNumOf35s}/>
            <BbCalcRow text='25Ibs plates:' plate={numOf25s} setPlate={setNumOf25s}/>
            <BbCalcRow text='10Ibs plates:' plate={numOf10s} setPlate={setNumOf10s}/>
            <BbCalcRow text='5Ibs plates:' plate={numOf5s} setPlate={setNumOf5s}/>
            <BbCalcRow text='2.5Ibs plates:' plate={numOf2_5s} setPlate={setNum2_5s}/>
          </div>
          <div className='app__bbCalc-card_body-button'>
            <button className='custom__button' onClick={() => {}}>Calculate</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BarbellCalculator