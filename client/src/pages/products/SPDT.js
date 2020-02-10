import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal } from "react-bootstrap";

import "./Products.css";

class SPDT extends Component {
  componentDidMount() {
    new WOW().init()
  }
  render() {
    return (
      <div className="container">
        <Container id="product-header">
          <Row className="wow zoomIn">
            <Col sm={12}>
              <h3><strong>SINGLE-POLE-DOUBLE-THROW (SPDT)</strong></h3>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default SPDT;
