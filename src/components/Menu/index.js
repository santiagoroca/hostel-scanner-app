import React, { Component } from 'react';

import MenuItem from '../MenuItem'

import './Style.css'

class Container extends Component {
  render() {
    return (
      <div className="container">
        <MenuItem name="fa fa-user" />
        <MenuItem name="fa fa-card-o" />
      </div>
    );
  }
}

export default Container;
