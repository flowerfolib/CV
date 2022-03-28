import React, { Component } from 'react'

export class Post extends Component {
    render() {
        return (
            <section className="our-news section-margin">
                <div className="container">
                  <div className="one-title" data-dsn-animate="up">
                    <div className="title-sub-container">
                      <p className="title-sub">My Blog</p>
                    </div>
                    <h2 className="title-main">I also write some articlest</h2>
                  </div>
                  <div className="custom-container">
                    <div className="slick-slider">
                      <div className="item-new slick-slide">
                        <div className="image" data-overlay={5}>
                          <img src="img/blog/1.webp" alt="blog" />
                        </div>
                        <div className="content">
                          <div className="background" />
                          <h5>Web , Front-end</h5>
                          <div className="cta">
                            <a href="https://citrineacademy.com/post/make-music-player-with-darklight-mode/01" target='_blank' rel='noreferrer'>Music Player with Dark/Light Mode</a>
                          </div>
                          <p>An article I code music app with two modes dark mode and light mode for fun</p>
                        </div>
                      </div>
                      <div className="item-new slick-slide">
                        <div className="image" data-overlay={5}>
                          <img src="img/blog/2.webp" alt="" />
                        </div>
                        <div className="content">
                          <div className="background" />
                          <h5>Web , Front-end</h5>
                          <div className="cta">
                            <a href="https://citrineacademy.com/post/make-windows-11-desktop-design-using-only-html-and-css/26"  target='_blank' rel='noreferrer'>Windows 11 Desktop Design</a>
                          </div>
                          <p>I cloned the interface of Windows 11 Desktop, it was quite fun and entertaining on my sunday</p>
                        </div>
                      </div>
                      <div className="item-new slick-slide">
                        <div className="image" data-overlay={5}>
                          <img src="img/blog/3.webp" alt="" />
                        </div>
                        <div className="content">
                          <div className="background" />
                          <h5>Web , Front-end</h5>
                          <div className="cta">
                            <a href="https://citrineacademy.com/post/make-login-form-using-only-html-and-css/04"  target='_blank' rel='noreferrer'> Login Form</a>
                          </div>
                          <p>The form I made with html, css but the effect is quite smooth, if you are interested, you can check it out</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        )
    }
}

export default Post
