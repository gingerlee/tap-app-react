import React from 'react';
import Hero from '../components/Hero';
import homeBeer from '../assets/images/home-beer.jpg';
import KegList from './KegList';

function Home(){
  return(
    <div>
      <Hero
        heroImage={homeBeer}/>
      <KegList/>

    </div>
  );
}

export default Home;
