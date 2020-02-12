import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Products.css";

class SP7T_SP8T extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Container id="product-header">
          <Row className="wow zoomIn">
            <Col sm={12} id="sp6t-col-12">
              <h3><strong>SPMT (SINGLE-POLE-MULTI-THROW)</strong></h3>
              <p>7 OR 8 POSITION SWITCHES</p>
              <p>STANDARD. INTERNAL OR EXTERNAL TERMINATIONS</p>
              <p>​UP TO 18.0 GHZ</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/sp8t-1.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/sp8t-2.png" fluid />
            </Col>

            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/sp8t-3.png" fluid />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default SP7T_SP8T;
