import React, { Component } from 'react';
import './Style.css'

class UserMenuItem extends Component {
  render() {
    return (
      <div className="menu-item search-menu-item">
        <i className={this.props.name}/>
      </div>
    );
  }
}

export default UserMenuItem;
