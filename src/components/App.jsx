import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './components/Home';
import Admin from './components/Admin';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList = [
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
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }


  handleAddingNewKegToList(newKeg) {
    const newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render (){
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
          <Route exact path='/' render={()=><Home kegList={this.state.masterKegList} />} />
          <Route exact path='/admin' render={()=><Admin onNewKegCreation={this.handleAddingNewKegToList} />}  />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default App;
