import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            videoSession: ""
        }
    }

  render() {
    return (
      <header className="header">
        <div className="logo">
            <h1>MINIyou</h1>
        </div>
        <nav className="main-menu">
            <ul className="menu-options">
                <li>Video Session</li>
            </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
    return {
        videoSession: state.VideoReducer.videoSession,
    }
  }

export default connect(mapStateToProps)(Header);
