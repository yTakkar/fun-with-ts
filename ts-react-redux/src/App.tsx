import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Name from './components/Name';
import User from './components/User';
import Profession from './components/Profession'
import Fruits from './components/Fruits'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Name name='Faiyaz' />
          <User />
          <Profession />
          <Fruits />
        </div>
      </Provider>
    );
  }
}

export default App;
