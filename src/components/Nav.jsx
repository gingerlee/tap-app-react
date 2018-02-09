import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const linkDecoration = {
    textDecoration: 'none',
    color: '#000',
    margin: '10px'
  };
  return(
    <div>
      <Link style={linkDecoration} to='/'><a>Home</a></Link>
      <Link style={linkDecoration} to='/admin'><a> Admin</a></Link>
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
