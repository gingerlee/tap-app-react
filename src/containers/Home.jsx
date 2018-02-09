import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import homeBeer from '../assets/images/home-beer.jpg';

function Home(){
  return(
    <div>
      <Hero
        heroTitle={'Tap That App'}
        heroImage={homeBeer}/>
      <Nav/>
    </div>
  );
}

export default Home;
