import React from 'react'
import './Acuille.css';
import Cards from './Cards';

export default function Accuille() {
  return (
    <div className='bg'>
      <h1>Bienvenu Sur <br /> <span>Flight Company</span> <br /> Website</h1>

      <div className='cards'>
        <Cards villeDepart='Tanger' DepartTime='10:30' villeArive='London' AriveTime='15:30' DateVol="1 Avril 2023" />
        <Cards villeDepart='Casa blanca' DepartTime='11:00' villeArive='Amesterdam' AriveTime='16:00' DateVol="1 Avril 2023" />
        <Cards villeDepart='Marakech' DepartTime='09:30' villeArive='sweden' AriveTime='12:00' DateVol="3 Avril 2023" />
        <Cards villeDepart='Tanger' DepartTime='14:50' villeArive='Marakesh' AriveTime='16:30' DateVol="3 Avril 2023" />
        <Cards villeDepart='Casa blanca' DepartTime='07:30' villeArive='Abu Dabi' AriveTime='14:00' DateVol="4 Avril 2023" />
        <Cards villeDepart='Tanger' DepartTime='08:25' villeArive='Cairo' AriveTime='12:55' DateVol="4 Avril 2023" />
      </div>
    </div>
  )
}
