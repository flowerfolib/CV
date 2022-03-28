import React, { Component } from 'react'

export class Process extends Component {
    render() {
        return (
           
            <section className="brand-client section-margin">
            <div className="container">
              <div className="one-title" data-dsn-animate="up">
                <div className="title-sub-container">
                  <p className="title-sub">Contact me</p>
                </div>
                <h2 className="title-main">Hope we can cooperate with each other</h2>
              </div>  
        <div className="row">
        <div className="col-lg-6">
          <div className="box-info-contact">   
          <ul>
              <li>
                <span>Phone</span>
                <a href="tel:0963395763">+84 633 957 63</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:nguyenhuyhoangdevelop@gmail.com">nguyenhuyhoangdevelop@gmail.com</a>
              </li>
              <li>
                <span>Address</span>
                <a href="/">Ha noi, Viet Nam</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-box"> 
            <form id="contact-form" className="form" method="post" action="contact.php" data-toggle="validator" noValidate="true">
              <div className="messages" />
              <div className="input__wrap controls">
                <div className="form-group has-error has-danger">
                  <div className="entry">
                    <label>What's your name?</label>
                    <input id="form_name" type="text" name="name" placeholder="Type your name" required="required" data-error="name is required." />
                  </div>   </div>
                <div className="form-group has-error has-danger">
                  <div className="entry">
                    <label>Topics you want to discuss with you?</label>
                    <input id="form_email" type="email" name="email" placeholder="Type your topic" required="required" data-error="Valid email is required." />
                  </div> 
                </div>
                <div className="form-group has-error has-danger">
                  <div className="entry">
                    <label>
Describe in more detail</label>
                    <textarea id="form_message" className="form-control" name="message" placeholder="Tell us about you and the world" required="required" data-error="Please,leave us a message." defaultValue={""} />
                  </div>  </div>
                <div className="image-zoom" style={{transformOrigin: '0px 0px 0px', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                  <button>Send Message</button>
                  <div className="icon-circle" style={{transformOrigin: '0px 0px 0px', transform: 'matrix(1, 0, 0, 1, 0, 0)'}} /></div>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
          </section>
        )
    }
}

export default Process
