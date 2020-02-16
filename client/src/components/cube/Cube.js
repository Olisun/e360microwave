import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';

import "./Cube.css"

class Cube extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="box__face box__face--front">Front</div>
          <div className="box__face box__face--back">Back</div>
          <div className="box__face box__face--right">Right</div>
          <div className="box__face box__face--left">Left</div>
          <div className="box__face box__face--top">Top</div>
          <div className="box__face box__face--bottom">Bottom</div>
        </div>
      </div>
    )
  }
}

export default Cube;