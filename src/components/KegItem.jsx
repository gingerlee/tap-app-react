import React from 'react';
import PropTypes from 'prop-types';

function KegItem(props) {
  return (
    <div className='card'>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <p>{props.price}</p>
      <p>{props.abv}</p>
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
