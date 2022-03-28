import React, { Component } from 'react'

export class TalkSomething extends Component {
    render() {
        return (
            <div className=" box-gallery-vertical section-margin section-padding" data-dsn="color">
            <div className="mask-bg" />
            <div className="container">
              <div className="row align-items-center h-100">
                <div className="col-lg-6 ">
                  <div className="box-im" data-dsn-grid="move-up">
                    <img className="has-top-bottom" src="img/project/7.jpg" alt="" data-dsn-move="20%" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-info">
                    <div className="vertical-title" data-dsn-animate="up">
                      <h2>Shine in The night
</h2>
                    </div>
                    <h6 data-dsn-animate="up">The moon is my favorite symbol, when I look at it it is very peaceful and comfortable
</h6>
                    <p data-dsn-animate="up">Night is the time when I sit down to code and think about something, for me the moon is either absent or brightest in the night, just like the saying I like "First or nothing"
</p>
                    <div className="link-custom" data-dsn-animate="up">
                      <a className="image-zoom effect-ajax" href="/" data-dsn="parallax">
                        <span>Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default TalkSomething
