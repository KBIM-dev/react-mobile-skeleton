import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.changeMenu = props.changeMenu;
  }

  render() {
    return (
      <nav className='navigation' id='m-nav' style={this.props.styles} onClick={this.changeMenu}>
        <ul>
          <li>
            <Link to='/'>
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link to='/404'>
              <span>404</span>
            </Link>
          </li>
          <li>
            <Link to='/error'>
              <span>404</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>home</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
