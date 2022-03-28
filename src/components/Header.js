import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="dsn-nav-bar">
            <div className="site-header">
              <div className="extend-container">
                <div className="inner-header">
                  <div className="main-logo">
                    <a href="index.html">
                      <img className="dark-logo" src="img/logo-dark.png" alt="" />
                      <img className="light-logo" src="img/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        )
    }
}

export default Header
