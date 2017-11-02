import React, { Component, PropTypes } from 'react';

export default class MainBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'welcome',
      content: 'some content',
    };
  }

  render() {
    return (
      <div className='wrapper' style={{ paddingTop: this.props.showInstallApp ? '115px' : '58px' }}>
        <div className='work-block home'>
          <h1 className='home turquoise'>{this.state.title}</h1>
          <div className='page-part turquoise'>
            <p>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
MainBlock.contextTypes = {
  router: PropTypes.object.isRequired,
};