import React, { Component } from 'react';

export default class Label extends Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      flag: false,
    };
  }

  handleButtonClick(e) {
    e.preventDefault(e);
    this.props.changeMenu();
  }
  render() {
    return (
      <label htmlFor='burger' className='burgerlable' onClick={this.handleButtonClick}></label>
    );
  }
}
