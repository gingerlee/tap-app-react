import React from 'react';
import PropTypes from 'prop-types';

function Hero(props) {
  return (
    <div className='hero'>
      <h1>Hero Works</h1>
      <style jsx>{`
        color: white;
        height: 500px;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-image: url(${props.heroImage});
        `}</style>
    </div>
  );
}

Hero.propTypes = {
  heroImage: Proptypes.string
};

export default Hero;
