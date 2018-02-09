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
  }
];

function KegList() {
  return (
    <div>
      <h1 className='header'>Daily Taps</h1>
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
          .header {
            text-align: center;

          }
          .cards {
          display: grid;
          grid-gap: 30px;
          grid-template-columns: repeat(3, 1fr);
          maxWidth: '1200px',
          margin: 'auto'
        }
      `}</style>
    </div>
  );
}
export default KegList;
