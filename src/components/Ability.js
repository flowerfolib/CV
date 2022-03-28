import React, { Component } from 'react'

export class Ability extends Component {
    render() {
        return (
           
            <section className="our-services-2 section-margin">
            <div className="container">
              <div className="one-title" data-dsn-animate="up">
                <div className="title-sub-container">
                  <p className="title-sub">My ability
</p>
                </div>
                <h2 className="title-main">What do you think if I can?
</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="services-item">
                    <div className="corner corner-top" />
                    <div className="corner corner-bottom" />
                    <div className="icon">
                      <img src="img/services/1.png" alt="" />
                    </div>
                    <div className="services-header">
                      <h3>Creative</h3>
                    </div>
                    <p>The process of working sometimes we need some alternative solutions to temporary problems that need to be solved, turning bugs into features for example </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="services-item selected">
                    <div className="corner corner-top" />
                    <div className="corner corner-bottom" />
                    <div className="icon">
                      <img src="img/services/2.png" alt="" />
                    </div>
                    <div className="services-header">
                      <h3> UX & UI</h3>
                    </div>
                    <p>What do you think if the Cancel Button is more prominent than the Buy Button
.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="services-item">
                    <div className="corner corner-top" />
                    <div className="corner corner-bottom" />
                    <div className="icon">
                      <img src="img/services/3.png" alt="" />
                    </div>
                    <div className="services-header">
                      <h3>WEB DEVELOPMENT</h3>
                    </div>
                    <p>Some languages ​​I often use like C++, PYTHON, HTML, CSS, JAVASCRIPT, JQUERY, REACTJS
</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Ability
