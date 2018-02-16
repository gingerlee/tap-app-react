import React from 'react';
import KegItem from '../components/KegItem.jsx';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <div>
      <div className='intro'>
        <h3 className='header'>Tap List</h3>
        <p className='flow-text center'>A curated list of taps for you that we suggest you get your hands on. Keep checking back for updates on our daily suggestions. </p>
      </div>
      <div className='cards'>
        {props.kegList.map((keg, index) =>
          <KegItem
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            key={index}/>
        )}
      </div>
      <style jsx>{`
          .intro {
            margin: 3em;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .cards {
          display: grid;
          grid-gap: 30px;
          grid-template-columns: repeat(3, 1fr);
          margin: 0 3em;
        }
      `}</style>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
