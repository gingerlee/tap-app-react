import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return(
    <div>
      <Link to='/'><a>Home</a></Link> | <Link to='/admin'><a>Admin</a></Link>
      <style jsx>{`
          

        `}</style>
    </div>
  );
}

export default Nav;
