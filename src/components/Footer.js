import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
              <div className="container">
                <div className="footer-links p-relative">
                  <div className="row">
                    <div className="col-md-12 dsn-col-footer d-flex justify-content-center">
                      <div className="footer-block">
                        <div className="footer-logo">
                          <a href><img src="img/logo.png" alt="" /></a>
                        </div>
                        <div className="footer-social">
                          <ul className="d-flex justify-content-center">
                            <li><a href="https://www.facebook.com/HuyHoangNguyen2306" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="/"><i className="fab fa-instagram" /></a></li> 
                            <li><a href="https://www.linkedin.com/in/huy-ho%C3%A0ng-nguy%E1%BB%85n-b18b09220/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin" /></a></li> 
                          </ul>
                        </div>
                      </div>
                    </div>   
                  </div>
                </div>
                <div className="copyright">
                  <div className="text-center">
                    <p>© 2021 Luki Profile</p>
                    <div className="copright-text over-hidden">Designed by <a className="link-hover" data-hover-text="Luki Nguyen" href="/" target="_blank" ref='noreferrer'>Luki Nguyen</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
        )
    }
}

export default Footer
