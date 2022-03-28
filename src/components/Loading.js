import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            
        <div className="preloader">
        <div className="preloader-after" />
        <div className="preloader-before" />
        <div className="preloader-block">
          <div className="title">Luki Nguyen</div>
          <div className="percent">0</div>
          <div className="loading">loading...</div>
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress" />
        </div>
      </div>
        )
    }
}

export default Loading
