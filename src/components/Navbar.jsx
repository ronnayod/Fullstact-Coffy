import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/coffy-logo.png';
import bgnav from '../images/bg.png';
import '../components/Navbar.css'

function Navbar() {
  return (
    <>
      <nav
        style={{ 
          height: '700px', 
          backgroundImage: `url(${bgnav})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          paddingLeft: '12rem', // กำหนด padding ซ้าย (คล้ายกับ `px-8`)
          paddingRight: '12rem', // กำหนด padding ขวา (คล้ายกับ `px-8`
        }}
      >
        <div style={{display: 'flex',justifyContent: 'space-between', }} >
          {/* โลโก้ */}
          <img src={logo} style={{ width: '40px', height: '55px', marginTop:'15px', marginleft:'-100px' }} />

          {/* เมนู */}
          <div>
            <ul style={{display: 'flex', marginTop:'30px', listStyle:'none'}}>
              <li style={{ marginLeft: '50px' }} >
                <Link to="/home" className="text-white hover:text-blue-500" aria-current="page" style={{textDecoration:'none', color:'#fff'}}>
                  Home
                </Link>
              </li>
              <li style={{ marginLeft: '50px' }}>
                <Link to="/Coffee" className="text-white hover:text-blue-500" style={{textDecoration:'none', color:'#fff'}}>
                Coffee
                </Link>
              </li>
              <li style={{ marginLeft: '50px' }}>
                <Link to="/Bakery" className="text-white hover:text-blue-500" style={{textDecoration:'none', color:'#fff'}}>
                Bakery
                </Link>
              </li>
              <li style={{ marginLeft: '50px' }}>
                <Link to="/Shop" className="text-white hover:text-blue-500" style={{textDecoration:'none', color:'#fff'}}>
                Shop
                </Link>
              </li>
              <li style={{ marginLeft: '50px' }}>
                <Link to="/contact" className="text-white hover:text-blue-500" style={{textDecoration:'none', color:'#fff'}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="header-text">
            <h1 className="header-title">We serve the richest coffee in the city</h1>
            <a href="#" className="header-btn">Order now</a>
          </div>
        </div>
      </nav>

     
    </>
    
  );
}

export default Navbar;
