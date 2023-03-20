import React, { useState } from 'react'
import Cards from './Cards';
import './Reservatin.css'

export default function Reservation() {


  const villedep = [{
    Tanger : [
      {villeDepart: 'tanger',DepartTime: '10:30',villeArive : 'london',AriveTime : '15:30',DateVol : "1 avril 2023"},
      {villeDepart: 'tanger',DepartTime: '14:30',villeArive : 'Marakech',AriveTime : '16:30',DateVol : "3 avril 2023"},
      {villeDepart: 'tanger',DepartTime: '08:25',villeArive : 'Cairo',AriveTime : '12:55',DateVol : "4 avril 2023"}
    ],
    CasaBlanca : [
      {villeDepart: 'Casa blanca',DepartTime: '11:00',villeArive : 'Amesterdam',AriveTime : '16:00',DateVol : "1 avril 2023"},
      {villeDepart: 'Casa blanca',DepartTime: '07:30',villeArive : 'Abu Dabi',AriveTime : '14:00',DateVol : "4 avril 2023"}
    ],
    Marakesh : [
      {villeDepart: 'Marakesh',DepartTime: '09:30',villeArive : 'sweden',AriveTime : '12:00',DateVol : "3 avril 2023"}
    ]
  }]

  const [viledep,setviledep] = useState('');
  const [flightList, setFlightList] = useState([]);

  const findVoles = () =>{
    if(viledep === 'Tanger'){
      const flightroads = villedep[0].Tanger.map((el)=>{
        return <Cards villeDepart={el.villeDepart} DepartTime={el.DepartTime} villeArive={el.villeArive} AriveTime={el.AriveTime} DateVol={el.DateVol} />
      })
      setFlightList(flightroads)
    }
    if(viledep === 'CasaBlanca'){
      const flightroads = villedep[0].CasaBlanca.map((el)=>{
        return <Cards villeDepart={el.villeDepart} DepartTime={el.DepartTime} villeArive={el.villeArive} AriveTime={el.AriveTime} DateVol={el.DateVol} />
      })
      setFlightList(flightroads)
    }
    if(viledep === 'Marakesh'){
      const flightroads = villedep[0].Marakesh.map((el)=>{
        return <Cards villeDepart={el.villeDepart} DepartTime={el.DepartTime} villeArive={el.villeArive} AriveTime={el.AriveTime} DateVol={el.DateVol} />
      })
      setFlightList(flightroads)
    }
  }

  return (
    <div className='reservation_Zone'>
      <select name="" id="select" value={viledep} onChange={(e)=>setviledep(e.target.value)}>
        <option value="" disabled selected>Select votre ville de depart</option>
        <option value="Tanger">Tanger</option>
        <option value="CasaBlanca">CasaBlanca</option>
        <option value="Marakesh">Marakesh</option>
      </select>

      <input type="Button" value='rechercher' id='butt' onClick={findVoles}/>

    <div>
      {flightList}
    </div>
    </div>
  )
}
