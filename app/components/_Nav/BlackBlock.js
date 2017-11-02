import React, { Component } from 'react';

export default class BlackBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      some: false,
    };
  }

  render() {
    return (
      <div className='black' style={this.props.styles} />
    );
  }
}
