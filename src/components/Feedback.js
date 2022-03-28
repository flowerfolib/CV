import React, { Component } from 'react'

export class Feedback extends Component {
    render() {
        return (
            <section className="client-see section-margin">
                <div className="container">
                  <div className="inner">
                    <div className="left">
                      <h2 className="title" data-dsn-grid="move-section" data-dsn-move={-60} data-dsn-duration="100%" data-dsn-opacity={1} data-dsn-responsive="tablet">
                        <span className="text">Feedback from my clients.</span>
                      </h2>
                    </div>
                    <div className="items">
                      <div className="bg" />
                      <div className="slick-slider">
                        <div className="item">
                          <div className="quote">
                            <p>"We really thank you for bringing a website that brings our ideas to customers around the world! Hope to be able to cooperate with you in the next ideas"</p>
                          </div>
                          <div className="bottom">
                            <div className="avatar">
                              <img src="img/avatar/1.jpeg" alt="clients" />
                            </div>
                            <div className="label">
                              <div className="cell">- Quinn Lai, Founder of EONIQ</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="quote">
                            <p>"The interface you make is very beautiful, it is our face in the Vietnamese market and you did not disappoint me! You guys are great"</p>
                          </div>
                          <div className="bottom">
                            <div className="avatar">
                              <img src="img/avatar/2.jpg" alt="" />
                            </div>
                            <div className="label">
                              <div className="cell">-Duyen Le, Director of Audi vietnam</div>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        )
    }
}

export default Feedback
