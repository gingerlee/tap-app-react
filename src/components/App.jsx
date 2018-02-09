import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from '../containers/Home';
import Admin from '../containers/Admin';

function App(){
  return (
    <div>
      <style global jsx>{`
      html, body, h1, h2, h3, h4, p, ul, li {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
      }
    `}</style>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}


export default App;
