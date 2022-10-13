import React, { Component } from 'react'

export class IntroText extends Component {
    render() {
        return (
            <section className="intro-about section-margin">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="intro-content-text">
                    <h2 data-dsn-grid="move-section" data-dsn-move={-30} data-dsn-duration="100%" data-dsn-opacity="1.2" data-dsn-responsive="tablet">
                    Welcome to <br /> Luki's website!!!
                    </h2>
                    <p data-dsn-animate="text">If you don't know me, I'm from Vietnam, currently I'm a freelance in UI & UX development.</p>
                    <p data-dsn-animate="text">You have just taken a look at the outstanding projects that I have worked on in the past, if you find it interesting, and want to collaborate, please contact me via the information below.

</p>
                    <h6 data-dsn-animate="text">Luki Nguyen</h6>
                    <small data-dsn-animate="text">Front-End Developer</small>
                    <div className="exper">
                      <div className="numb-ex">
                        <span className="word" data-dsn-animate="text">04</span>
                      </div>
                      <h4 data-dsn-animate="up">YEARS OF <br /> EXPERIENCE</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="background-mask">
              <div className="background-mask-bg" />
              <div className="img-box">
                <div className="img-cent" data-dsn-grid="move-up">
                  <div className="img-container">
                    <img data-dsn-y="30%" src="img/bgg.jpg" style={{borderRadius:"15px"}} alt="avatar" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default IntroText
