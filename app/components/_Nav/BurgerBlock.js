import React, { Component } from 'react';

export default class Burger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  render() {
    return (
      <input type='checkbox' id='burger' checked={this.props.showMenu} />
    );
  }
}
