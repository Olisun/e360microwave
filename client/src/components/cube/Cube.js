import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Cube.css"

class Cube extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="box__face box__face--front">
            <Image className="aboutImage-margin" src="/images/logo.png" fluid />
          </div>
          <div className="box__face box__face--back">
            <Image className="aboutImage-margin" src="/images/logo.png" fluid />
          </div>
          <div className="box__face box__face--right">
            <Image className="aboutImage-margin" src="/images/logo.png" fluid />
          </div>
          <div className="box__face box__face--left">
            <Image className="aboutImage-margin" src="/images/logo.png" fluid />
          </div>
          <div className="box__face box__face--top">
            <Image className="aboutImage-margin" src="/images/logo.png" fluid />
          </div>
          <div className="box__face box__face--bottom">
            <Image className="aboutImage-margin" src="/images/logo.png" fluid />
          </div>
        </div>
      </div>
    )
  }
}

export default Cube;