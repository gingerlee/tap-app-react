import React from 'react';
import KegItem from '../components/KegItem.jsx';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <div>

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
