import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import adminBeer from '../assets/images/admin-beer.jpg';

function Admin() {
  return(
    <div>
      <Hero
        heroImage={adminBeer}/>
      <Nav/>
    </div>
  );
}

export default Admin;
