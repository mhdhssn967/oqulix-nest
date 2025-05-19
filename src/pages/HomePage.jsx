import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import { auth } from '../../firebaseConfig'; // Import Firebase auth
import './HomePage.css';
import img1 from '../assets/18771.jpg';
import Cards from '../components/Cards';

const HomePage = () => {


  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='main-div'>
          <img width={'800px'} src={logo} alt="" />
          <p style={{ fontSize: '30px', textWrap: 'nowrap' }}>Your gateway to a suite of smart, purpose-built applications.</p>
          <p style={{ textAlign: 'right', marginTop: '30px', fontSize: '20px' }}>Crafted with care. Powered by Oqulix.</p>
        </div>
        <div className='img-div'>
          <img style={{ width: '80%' }} src={img1} alt="" />
        </div>
      </div>
      <div className='card-container'>
        <Cards />
      </div>
    </>
  );
};

export default HomePage;
