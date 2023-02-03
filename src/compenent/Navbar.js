import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Plane from '../plane.png';


export default function Navbar() {
  return (
    <div className='nav-top'>
      <Link className='link' to="/">
        <div className='l'>
            <img src={Plane} alt="" />
            <h3>Flight  Company</h3>
        </div>

      </Link>


      <div className='lis'>
        <Link className='link' to="/">Accuille</Link>
        <Link className='link' to="/Reservation">Reservation</Link>
        <Link className='link' to="/conecter">Se Conecter</Link>
        <Link className='link' to="/S'inscrire">S'inscrire</Link>
        <Link className='link' to="/contact">Contact</Link>
      </div>
    </div>
  )
}
