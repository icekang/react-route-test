import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <div className="navbar-header">
              <ul className="navbar-nav">
                <li class="nav-item"><a className="nav-link" href="/home">Home</a></li>
                <li class="nav-item"><a className="nav-link" href="/user">User</a></li>
              </ul>
            </div>
          </div>
      </nav>
    );
  } 
}

export default Header;
