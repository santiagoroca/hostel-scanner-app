//Third Party
import React, { Component } from 'react';
import { push } from 'react-router-redux'

//components
import { store } from '../../redux/Store'

//Style
import './Style.css'

class Container extends Component {
  render() {

    return (
      <div onClick={() => store.dispatch(push('/user'))} className="menu-item-container">
        <i class={this.props.name} />
      </div>
    );

  }
}

export default Container;
