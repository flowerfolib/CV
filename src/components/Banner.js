import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div className="dsn-slider" data-dsn-header="project">
              <div className="dsn-root-slider" id="dsn-hero-parallax-img">
                <div className="slide-inner">
                  <div className="swiper-wrapper">
                    <div className="slide-item swiper-slide">
                      <div className="slide-content">
                        <div className="slide-content-inner">
                          <div className="project-metas">
                            <div className="project-meta-box project-work cat">
                              <span>Participating projects</span>
                            </div>
                          </div>
                          <div className="title-text-header">
                            <div className="title-text-header-inner">
                              <a href="https://eoniq.co/products/pinot-blanc" target='_blank' rel="noreferrer"  className="effect-ajax" data-dsn-ajax="slider">
                                 EONIQ Watch
                              </a>
                            </div>
                          </div>
                          <p>
Design Website and Design Your Watch App for customers to choose their own mixes and create a watch with 1NO2</p>
                          <div className="link-custom">
                            <a href="https://eoniq.co/products/pinot-blanc" target='_blank' rel="noreferrer" className="image-zoom effect-ajax" data-dsn="parallax" data-dsn-ajax="slider">
                              <span>View now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="image-container">
                        <div className="image-bg cover-bg" data-image-src="img/project/1.jpg" data-overlay={0}>
                          <img src="img/project/1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="slide-item swiper-slide">
                      <div className="slide-content">
                        <div className="slide-content-inner">
                          <div className="project-metas">
                            <div className="project-meta-box project-work cat">
                              <span>Out Source</span>
                            </div>
                          </div>
                          <div className="title-text-header">
                            <div className="title-text-header-inner">
                              <a href="https://www.audi.vn/sea/web/vnvi/models.html"  target='_blank'rel="noreferrer" className="effect-ajax" data-dsn-ajax="slider">
                                Audi VietNam
                              </a>
                            </div>
                          </div>
                          <p>Build website interface including homepage, refer to car models
</p>
                          <div className="link-custom">
                            <a href="https://www.audi.vn/sea/web/vnvi/models.html"  target='_blank' rel="noreferrer"  className="image-zoom effect-ajax" data-dsn="parallax" data-dsn-ajax="slider">
                              <span>View now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="image-container">
                        <div className="image-bg cover-bg" data-image-src="img/project/2.jpg" data-overlay={4}>
                          <img src="img/project/1.jpg" alt="" />
                        </div>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
              <div className="dsn-slider-content" />
              <div className="nav-slider">
                <div className="swiper-wrapper" role="navigation">
                  <div className="swiper-slide">
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="img/project/1.jpg" data-overlay={2}>
                      </div>
                    </div>
                    <div className="content">
                      <p>01</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="img/project/2.jpg" data-overlay={2}>
                      </div>
                    </div>
                    <div className="content">
                      <p>02</p>
                    </div>
                  </div>   
                </div>
              </div>
              <section className="footer-slid" id="descover-holder">
                <div className="main-social">
                  <div className="social-icon">
                    <div className="social-btn">
                      <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.3 23.2">
                          <path d="M19.4 15.5c-1.2 0-2.4.6-3.1 1.7L7.8 12v-.7l8.5-5.1c.7 1 1.9 1.6 3.1 1.6 2.1 0 3.9-1.7 3.9-3.9S21.6 0 19.4 0s-3.9 1.7-3.9 3.9v.4L7 9.3c-1.3-1.7-3.7-2-5.4-.8s-2.1 3.7-.8 5.4c.7 1 1.9 1.6 3.1 1.6s2.4-.6 3.1-1.6l8.5 5v.4c0 2.1 1.7 3.9 3.9 3.9s3.9-1.7 3.9-3.9c0-2.1-1.7-3.8-3.9-3.8zm0-13.6c1.1 0 1.9.9 1.9 1.9s-.9 1.9-1.9 1.9-1.9-.7-1.9-1.8.8-2 1.9-2zM3.9 13.6c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.9-1.9 1.9zm15.5 7.8c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.8-1.9 1.9z">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="social-network">
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="control-num">
                  <span className="sup active">01</span>
                </div>
                <div className="control-nav">
                  <div className="prev-container" data-dsn="parallax">
                    <svg viewBox="0 0 40 40">
                      <path className="path circle" d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2" />
                      <polyline className="path" points="14.6 17.45 20 22.85 25.4 17.45" />
                    </svg>
                  </div>
                  <div className="next-container" data-dsn="parallax">
                    <svg viewBox="0 0 40 40">
                      <path className="path circle" d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2" />
                      <polyline className="path" points="14.6 17.45 20 22.85 25.4 17.45" />
                    </svg>
                  </div>
                </div>
              </section>
            </div>
        )
    }
}

export default Banner
