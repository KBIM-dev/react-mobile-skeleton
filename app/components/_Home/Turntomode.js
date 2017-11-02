import React, { Component, PropTypes } from 'react';

export default class Turntomode extends Component {

  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      content: 'turn phone to vertical',
      landscapeMode: false,
    };
  }
  componentWillMount() {
    // alert(window.orientation);
    if (window.WURFL.is_mobile === true && window.WURFL.form_factor === 'Smartphone') {
      if (Math.abs(window.orientation) === 90) {
        this.setState({ landscapeMode: true });
      } else {
        this.setState({ landscapeMode: false });
      }
    }
  }
  componentDidMount() {
    window.addEventListener('orientationchange', this.updateDimensions);
  }
  updateDimensions() {
    if (window.WURFL.is_mobile === true && window.WURFL.form_factor === 'Smartphone') {
      if (Math.abs(window.orientation) === 90) {
        this.setState({ landscapeMode: true });
      } else {
        this.setState({ landscapeMode: false });
      }
    }
  }

  render() {
    const turnToStyle = this.state.landscapeMode ? { display: 'table' } : { display: 'none' };
    return (
      <div id='turn-disp' style={turnToStyle}>
        <div className='turn-cont-holder' dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    );
  }
}
Turntomode.contextTypes = {
  router: PropTypes.object.isRequired,
};
