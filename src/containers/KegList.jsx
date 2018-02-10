import React from 'react';
import KegItem from '../components/KegItem.jsx';

const masterKegList = [
  {
    name: 'GingaNinja',
    brand: 'Two Towns Cider',
    price: 4.50,
    abv: '5.2%'
  },
  {
    name: 'Black (黑)',
    brand: 'Mikkeller',
    price: 9.00,
    abv: '17.5%'
  },
  {
    name: 'Knights of Chris-Lumbus',
    brand: 'Geno-Ciders',
    price: 6.50,
    abv: '7.5%'
  },
  {
    name: 'Over Hopulation',
    brand: 'Barly Brown\'s Beer',
    price: 6.00,
    abv: '8.5%'
  },
  {
    name: 'Optimist',
    brand: 'Fort George',
    price: 5.00,
    abv: '5.5%'
  },
  {
    name: 'Coconut Porter',
    brand: 'Maui Brewing',
    price: 7.00,
    abv: '5.7%'
  }
];

function KegList() {
  return (
    <div>
      <div className='intro'>
        <h3 className='header'>Tap List</h3>
        <p className='flow-text center'>A curated list of taps for you that we suggest you get your hands on. Keep checking back for updates on our daily suggestions. </p>
      </div>
      <div className='cards'>
        {masterKegList.map((keg, index) =>
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
export default KegList;
