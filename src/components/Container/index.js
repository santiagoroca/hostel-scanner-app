import React, { Component } from 'react';
import './Style.css'

import UserMenuItem from '../UserMenuItem'
import SearchMenuItem from '../SearchMenuItem'

class Container extends Component {
  render() {
    return (
      <div className="container">
        <UserMenuItem name="fa fa-user"/>
        <UserMenuItem name="fa fa-id-card-o"/>
      </div>
    );
  }
}

export default Container;
