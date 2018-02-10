import React from 'react';

import Hero from '../components/Hero';
import adminBeer from '../assets/images/admin-beer.jpg';
import {Button, Icon} from 'react-materialize';

function Admin() {
  return(
    <div>
      <Hero
        heroTitle={'Admin Portal'}
        heroImage={adminBeer}/>

      <div className='intro center'>
        <h3 className='header'>Edit/Add Taps</h3>
        <p className='flow-text'>Use the buttons below to update and add taps to the taplist. </p>
      </div>

      <Button waves='light'>
        Edit Kegs
        <Icon right>thumb_up</Icon>
      </Button>
      <Button waves='light'>
        Add Keg
        <Icon right>thumb_up</Icon>
      </Button>
      <style jsx>{`
          .intro {
            margin: 3em;
          }
          h3{
            margin-bottom: 30px;
          }

            `}</style>
    </div>
  );
}

export default Admin;
