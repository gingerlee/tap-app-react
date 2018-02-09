import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import homeBeer from '../assets/images/home-beer.jpg';
import KegList from './KegList';

function Home(){
  return(
    <div>
      <Hero
        heroTitle={'Tap That App'}
        heroImage={homeBeer}/>
      <Nav/>
      <KegList/>
      
    </div>
  );
}

export default Home;
