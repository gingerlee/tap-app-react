import React from 'react';
import Hero from '../components/Hero';
import adminBeer from '../assets/images/admin-beer.jpg';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function Admin(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
  }

  return(
    <div>
      <Hero
        heroTitle={'Admin Portal'}
        heroImage={adminBeer}/>

      <div className='intro center'>
        <h3 className='header'>Add Keg</h3>
        <p className='flow-text'>Use the form below to add kegs to the taplist. </p>
      </div>
      <div className='card'>
        <form>
          <input
            type='text'
            id='name'
            placeholder='Keg Name'
            ref={(input) => {_name = input;}} />
          <input
            type='text'
            id='brand'
            placeholder='Brand'
            ref={(input) => {_brand = input;}} />
          <input
            type='text'
            id='price'
            placeholder='Price'
            ref={(input) => {_price = input;}} />
          <input
            type='text'
            id='abv'
            placeholder='ABV'
            ref={(input) => {_abv = input;}} />
          <Button waves='light' className='add-button' type='submit'>
          Add Keg
            <Icon right>thumb_up</Icon>
          </Button>
        </form>
      </div>
      <style jsx>{`
          .intro {
            margin: 3em;
          }
          h3{
            margin-bottom: 30px;
          }
          .card {
            margin: 0 15vw 15vh 15vh;
            padding: 30px;
          }

      `}</style>
    </div>
  );
}

Admin.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default Admin;
