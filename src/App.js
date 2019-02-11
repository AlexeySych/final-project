import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PokemonsStore from './store';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import PokemonsContainer from './containers/Pokemons';
import Caught from './containers/Caught';
import Single from './containers/Single';


class App extends Component {
  render() {
    return (
      <Provider store={PokemonsStore}>
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={PokemonsContainer} />
            <Route exact path='/caught' component={Caught} />
            <Route path='/pokemons/:pokemonName' component={Single}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;



