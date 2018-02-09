import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import beer from '../assets/images/beer.jpg';

function Home(){
  return(
    <div>
      <Hero
        heroImage={beer}/>
      <Nav/>
    </div>
  );
}

export default Home;
