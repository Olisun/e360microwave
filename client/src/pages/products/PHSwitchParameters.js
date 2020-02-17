import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Products.css";

class PHSwitchParameters extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Container className="wow fadeInDown" id="product-header">
          <Row>
            <Col sm={12} id="sp6t-col-12">
              <h3><strong>POWER HANDLING CHART</strong></h3>
              <h3><strong>TYPICAL SWITCH PARAMETERS</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeInLeft">
          <Col sm={6}>
            <Image className="aboutImage-margin" src="/images/power-handling.png" fluid />
          </Col>
        </Container>
      </div>
    )
  }
};

export default PHSwitchParameters;
