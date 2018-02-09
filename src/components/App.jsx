import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from '../containers/Home';
import Admin from '../containers/Admin';

function App(){
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/admin' component={Admin} />
      <Route component={Error404} />
    </Switch>
  );
}


export default App;
