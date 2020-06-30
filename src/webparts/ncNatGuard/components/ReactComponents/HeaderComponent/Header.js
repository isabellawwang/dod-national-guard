import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  logo  from '../../Assets/images/logo.png'

class Header extends Component{
  render() {
    return (
      <header className="Header">
        
        <div className="logo">
            <img className="logo" src={logo} alt = "Seal of the North Carolina National Guard" />
        </div>

        <nav>
            <ul>
                <li className="first">
                    <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">Operations</Link>
                </li>
                <li>
                  <Link to="#">Public Affairs</Link>
                </li>
                <li>
                  <Link to="#">Resources</Link>
                </li>
                <li>
                  <Link to="/Contact">Who We Are</Link>
                </li>
                <li className="last">
                  <Link to="#">Services</Link>
                </li>
            </ul>
        </nav>
      </header>
    ); 
  }
}

export default Header;
