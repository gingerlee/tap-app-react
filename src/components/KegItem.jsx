import React from 'react';
import PropTypes from 'prop-types';

function KegItem(props) {
  return (
    <div className='card'>
      <h4>{props.name}</h4>
      <h4>{props.brand}</h4>
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
