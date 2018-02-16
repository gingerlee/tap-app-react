import React from 'react';
import Hero from '../components/Hero';
import homeBeer from '../assets/images/home-beer.jpg';
import KegList from './KegList';
import PropTypes from 'prop-types';

function Home(props){
  return(
    <div>
      <Hero
        heroImage={homeBeer}/>
      <KegList kegList={props.kegList}/>

    </div>
  );
}

Home.propTypes = {
  kegList: PropTypes.array
};

export default Home;
