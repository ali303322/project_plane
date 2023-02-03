import React from 'react'
import './Acuille.css';
import plane from '../plane.png'

export default function Accuille() {
  return (
    <div>
      <h1>Bienvenu Sur <br /> <span>Flight Company</span> <br /> Website</h1>

      <div className='cards'>
        <div className='card1'>
            <div className='destination'>
              <h3>Marakech <br /> 13:00</h3>
              <img src={plane} alt="" />
              <h3>London <br /> 18:30</h3>
            </div>
            <div className='date'>
              <h3>Mardi 07 Janvier 2023</h3>
            </div>
        </div>
        <div className='card2'>
            <div className='destination'>
              <h3>Tanger <br /> 07:00</h3>
              <img src={plane} alt="" />
              <h3>Paris <br /> 10:30</h3>
            </div>
            <div className='date'>
              <h3>venredi 10 Janvier 2023</h3>
            </div>
        </div>
        <div className='card3'>
            <div className='destination'>
              <h3>Tanger <br /> 19:30</h3>
              <img src={plane} alt="" />
              <h3>Istanbul <br /> 22:00</h3>
            </div>
            <div className='date'>
              <h3>lundi 13 Janvier 2023</h3>
            </div>
        </div>
        <div className='card4'>
            <div className='destination'>
              <h3>Marakech <br /> 19:30</h3>
              <img src={plane} alt="" />
              <h3>oujeda <br /> 22:00</h3>
            </div>
            <div className='date'>
              <h3>lundi 13 Janvier 2023</h3>
            </div>
        </div>

        <div className='card5'>
            <div className='destination'>
              <h3>Tanger <br /> 19:30</h3>
              <img src={plane} alt="" />
              <h3>Al riadh <br /> 22:00</h3>
            </div>
            <div className='date'>
              <h3>samedi 11 Janvier 2023</h3>
            </div>
        </div>

        <div className='card6'>
            <div className='destination'>
              <h3>Casablanca <br /> 19:30</h3>
              <img src={plane} alt="" />
              <h3>Roma <br /> 22:00</h3>
            </div>
            <div className='date'>
              <h3>Mercredi 22 Janvier 2023</h3>
            </div>
        </div>
      </div>
    </div>
  )
}
