import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const linkDecoration = {
    textDecoration: 'none',
    margin: '10px'
  };
  return(
    <div>
      <Link  style={linkDecoration} to='/'><a className='cyan-text'>HOME</a></Link>
      <Link style={linkDecoration} to='/admin'><a className='cyan-text'>ADMIN</a></Link>
      <style jsx>{`
          a:hover {
            opacity: .5;
          }
          div {
            display: flex;
            justify-content: center;
            padding: 2em;
          }

        `}</style>
    </div>
  );
}

export default Nav;
