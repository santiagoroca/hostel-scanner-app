import React, { Component } from 'react';
import './Style.css'

class UserMenuItem extends Component {

  constructor (props) {
    super(props);
    this.state = {
      active: false
    }
  }

  setActive () {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div class="menu-item-container">
        <div className="menu-container">
          <div className={"menu-item-options " + (this.state.active ? 'active' : '')}>
            <div>
              <i className="fa fa-plus"/>
            </div>
            <div>
              <i className="fa fa-search"/>
            </div>
          </div>
          <div className="menu-item" onClick={() => this.setActive()}>
            <i className={this.props.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserMenuItem;
