import { React, useState } from 'react';

import './BbCalcRow.css';


const BbCalcRow = ({text, plate, setPlate}) => {

  const [numOfPlates, setNumOfPlates] = useState(0);

  const valueInc = () => {
    setPlate(plate + 1);
  }

  const valueDec = () => {
    if(plate <= 0 ) {
      setPlate(0);
    }
    else {
      setPlate(plate - 1);
    }
  }

  return (
    <div className='app__BbCalcRow'>
      <div className='app__BbCalcRow-text'>
        <p className='p__teko'>{text}</p>
      </div>
      <div className='app__BbCalcRow-buttons'>
        <p className='p__teko'>{plate}</p>
        <button className='custom__button' onClick={() => {valueDec();}}>-</button>
        <button className='custom__button' onClick={() => {valueInc();}}>+</button>
      </div>
    </div>
  )
}

export default BbCalcRow