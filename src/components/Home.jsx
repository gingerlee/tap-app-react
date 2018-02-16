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
      <div className='intro'>
        <h3 className='header'>Tap List</h3>
        <p className='flow-text center'>A curated list of taps for you that we suggest you get your hands on. Please checking back for updates on our daily suggestions.</p>
      </div>
      <div className='keg-list'>
        <KegList kegList={props.kegList}/>
      </div>
      <style jsx>{`
        .intro {
          margin: 3em;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
          .keg-list  {
            margin: 0 15vw 20vh 15vw;
          }
      `}</style>
    </div>
  );
}

Home.propTypes = {
  kegList: PropTypes.array
};

export default Home;
