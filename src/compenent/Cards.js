import React from 'react'
import './Acuille.css';
import plane from '../plane.png'

export default function Cards({villeDepart,DepartTime,villeArive,AriveTime,DateVol}) {
  return (
    
      <div className='card'>
            <div className='destination'>
              <h3>{villeDepart} <br /> {DepartTime}</h3>
              <img src={plane} alt="" />
              <h3>{villeArive} <br /> {AriveTime}</h3>
            </div>
            <div className='date'>
              <h3>{DateVol}</h3>
            </div>
        </div>
    
  )
}
