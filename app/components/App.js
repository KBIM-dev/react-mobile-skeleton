import React, { Component } from 'react';
import '../SCSS/main.scss';

import Landing from '../components/_Home/Landing';
import Turntomode from '../components/_Home/Turntomode';
import Burger from '../components/_Nav/BurgerBlock';
import Label from '../components/_Nav/LabelBlock';
import Nav from '../components/_Nav/NavBlock';
import HeadrowBlock from '../components/_Nav/HeadrowBlock';
import BlackBlock from '../components/_Nav/BlackBlock';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.changeMenu = this.changeMenu.bind(this);
    this.state = {
      showMenu: '',
      mobile: false,
      flag: true,
    };
  }
  componentWillMount() {
    const debug = false;
    if (debug) {
      if (window.navigator.userAgent.match(/Android/i)
        || window.navigator.userAgent.match(/webOS/i)
        || window.navigator.userAgent.match(/iPhone/i)
        || window.navigator.userAgent.match(/iPod/i)
        || window.navigator.userAgent.match(/BlackBerry/i)
        || window.navigator.userAgent.match(/Windows Phone/i)
      ) {
        this.setState({ mobile: false });
      } else {
        this.setState({ mobile: true });
      }
    } else {
      if (window.WURFL.is_mobile === true && window.WURFL.form_factor === 'Smartphone') {
        this.setState({ mobile: false });
      } else {
        this.setState({ mobile: true });
      }
    }
  }
  changeMenu() {
    if (this.state.showMenu === '') {
      this.setState({ showMenu: 'checked' });
    } else if (this.state.showMenu === 'checked') {
      this.setState({ showMenu: '' });
    }
  }

  render() {
    let children = React.Children.map(
      this.props.children,
      (child) => React.cloneElement(
        child,
        {
          someProps: true,
        })
    );
    return (
      <div>
        <Turntomode />
        {this.state.mobile === true &&
          <Landing />
        }
        {!this.state.mobile &&
          <div id='app'>
            <header>
              <div className='header-wrapper-container'>
                <Burger showMenu={this.state.showMenu} />
                <Label changeMenu={this.changeMenu} showMenu={this.state.showMenu} />
                <Nav styles={{ top: '58px' }} changeMenu={this.changeMenu} />
                <HeadrowBlock changeMenu={this.changeMenu} showMenu={this.state.showMenu} />
                <BlackBlock styles={{ top: this.state.showInstallApp ? '115px' : '58px' }} />
              </div>
            </header>
            {children}
          </div>
        }
      </div>
    );
  }
}