import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal } from "react-bootstrap";

import "./Company.css";

class CompanyPage extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <div className="section-container">
          <Container>
            <Row>
              <Col sm={5}>
                <Image className="image-margin" src="/images/hq.png" fluid />
              </Col>
              <Col sm={7}>
                <Row>
                  <h5><strong>Santa Clara, CA</strong></h5>
                </Row>
                <Row>
                  <p>Headquartered in the heart of Silicon Valley, our office in Santa Clara, CA is the central point for all activities including sales, customer support, business development as well as product development and technical product support.</p>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="wow zoomIn">
              <Col sm={8}>
                <h5><strong>Manufacturing</strong></h5>
              </Col>
              <Col sm={4}></Col>
            </Row>
            <Row>
              <Col sm={12}>
                <p>​Manufacturing: 100,000 sq. ft. world class manufacturing plant. This is an exceptional facility for manufacturing RF/Microwave technology with class 10,000 clean rooms, laminar flow assembly and test stations and on site processes for plating, precision machining, injection molding and metrology. It is ISO-9001 certified and employs Six Sigma and other quality control processes.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default CompanyPage;
