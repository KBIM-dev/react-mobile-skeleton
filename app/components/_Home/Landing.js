import React, { Component, PropTypes } from 'react';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: 'you can view this site only on mobile',
      displayShare: false,
    };
  }

  render() {
    return (
      <div className='l-holder'>
        <div className='landing'>
          <img src='/public/img/loading.gif' />
          <p>{this.state.content}</p>
        </div>
      </div>
    );
  }
}
Landing.contextTypes = {
  router: PropTypes.object.isRequired,
};
