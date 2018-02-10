import React from 'react';
import PropTypes from 'prop-types';

function KegItem(props) {
  return (
    <div className='card'>
      <h5>{props.name}</h5>
      <h5>{props.brand}</h5>
      <p>Price: ${props.price}</p>
      <p>ABV: {props.abv}</p>
    </div>
  );
}

KegItem.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string
};

export default KegItem;
