//Third Party
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route } from 'react-router'

//Styles
import './Style.css'

//Store to routify content of Container
import { store, history } from '../../redux/Store'

//Components
import Home from '../Home'
import UserSearch from '../User/Search'

class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/user" component={UserSearch}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Container;
