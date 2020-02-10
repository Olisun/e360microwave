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
        <Container id="companyOverview">
          <Row className="wow zoomIn">
            <Col sm={12}>
              <h3><strong>COMPANY OVERVIEW</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={5}>
              <Image className="image-margin" src="/images/hq.png" fluid />
            </Col>
            <Col sm={7}>
              <Row>
                <h3><strong>Santa Clara, CA</strong></h3>
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
              <h3><strong>Manufacturing</strong></h3>
            </Col>
            <Col sm={4}></Col>
          </Row>
          <Row>
            <Col sm={12}>
              <p>​Manufacturing: 100,000 sq. ft. world class manufacturing plant. This is an exceptional facility for manufacturing RF/Microwave technology with class 10,000 clean rooms, laminar flow assembly and test stations and on site processes for plating, precision machining, injection molding and metrology. It is ISO-9001 certified and employs Six Sigma and other quality control processes.</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="wow zoomIn">
            <Col sm={8}>
              <h3><strong>Electromechanical Coaxial Switches: RF/Microwave</strong></h3>
            </Col>
            <Col sm={4}></Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/switch-assembly-1.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/switch-assembly-2.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/switch-assembly-3.png" fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h5 id="switch-assembly">Switch Assembly</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/switch-test-1.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/switch-test-2.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/switch-test-3.png" fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h5 id="switch-assembly">Switch Test</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/incoming-1.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/incoming-2.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/incoming-3.png" fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h5 id="switch-assembly">Incoming Inspection</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/inhouse-1.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/inhouse-2.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/inhouse-3.png" fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h5 id="switch-assembly">In-house Machining and Plating</h5>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CompanyPage;
