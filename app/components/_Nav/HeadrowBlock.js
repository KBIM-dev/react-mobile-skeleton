import React, { Component, PropTypes } from 'react';

export default class HeadrowBlock extends Component {
  constructor(props) {
    super(props);
    this.changeMenu = props.changeMenu;
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.state = {
      flag: false,
      isSock: false,
      timer: '',
      count: '',
    };
  }

  handleHomeClick() {
    if (this.props.showMenu == 'checked') {
      this.changeMenu();
    }
    this.context.router.push('/');
  }

  render() {
    return (
      <div className='row head-row' id='head-row-block'>
        <div className='col-7'>
          <span className='logo-holder' onClick={this.handleHomeClick} />
          <img src='/public/img/loading.gif' />
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
HeadrowBlock.contextTypes = {
  router: PropTypes.object.isRequired,
};
