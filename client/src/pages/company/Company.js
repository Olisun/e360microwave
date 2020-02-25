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
        <Container className="wow fadeInDown" id="companyOverview">
          <Row>
            <Col sm={12}>
              <h3><strong>COMPANY OVERVIEW</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeIn">
          <Row>
            <Col className="wow fadeIn" data-wow-delay="0.5s" sm={5}>
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
        <br></br>
        <Container className="wow fadeIn">
          <Row>
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
        <br></br>
        <hr></hr>
        <Container className="wow fadeIn">
          <Row>
            <Col sm={8}>
              <h3><strong>Electromechanical Coaxial Switches: RF/Microwave</strong></h3>
            </Col>
            <Col sm={4}></Col>
          </Row>
          <Row className="wow fadeIn" data-wow-delay="0.5s">
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
              <h5 id="center">Switch Assembly</h5>
            </Col>
          </Row>
          <Row className="wow fadeIn" data-wow-delay="0.5s">
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
              <h5 id="center">Switch Test</h5>
            </Col>
          </Row>
          <Row className="wow fadeIn" data-wow-delay="0.5s">
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
              <h5 id="center">Incoming Inspection</h5>
            </Col>
          </Row>
          <Row className="wow fadeIn" data-wow-delay="0.5s">
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
              <h5 id="center">In-house Machining and Plating</h5>
            </Col>
          </Row>
        </Container>
        <br></br>
        <hr></hr>
        <div className="wow fadeInUp">
          <Container>
            <Row >
              <Col sm={12}>
                <h2 id="center"><strong>Exceptional products with quality built in</strong></h2>
              </Col>
              <Col sm={4}></Col>
            </Row>
            <Row>
              <Col sm={12}>
                <p>​Quality is vital to our business because we value our customers’ loyalty and our reputation. We strive to provide our customers with products and services which meet or exceed their expectations. We are committed to continuous improvement and have established a Quality Management System which provides a framework for measuring and improving our performance on a continuous basis. </p>
              </Col>
            </Row>
          </Container>
          <hr></hr>
          <Container>
            <Row>
              <Col sm={12}>
                <h5><strong>Consistently deliverying high quality products is attributed to:</strong></h5>
                <ul>
                  <li><strong>ISO9001 Certified Manufacturing</strong></li>
                  <li><strong>Design Controls:</strong> Design input, review, output, verification and validation, transfer and design history files (DHF)</li>
                  <li><strong>Precision machining</strong></li>
                  <li><strong>Inspection and certification of genuine materials</strong></li>
                  <li><strong>Construction and assembly in accordance with industry standards</strong></li>
                  <li><strong>Process Validation:</strong> Installation qualification (IQ), operation qualification (OQ), performance qualification (PQ) and process capability assessment</li>
                  <li><strong>In-process tests at critical build stages</strong></li>
                  <li><strong>Equipment and Calibrations:</strong> Preventive equipment maintenance, measuring equipment calibration and measurement system analysis</li>
                  <li><strong>Consistent final inspection</strong></li>
                  <li><strong>Document and Control:</strong> Revision level control, validation and communication</li>
                  <li><strong>System Audit:</strong> Management review, scheduled internal audit, 3rd party audit and corrective action and preventive action (CAPA)</li>
                  <li><strong>Risk Management:</strong> Failure mode and effects analysis (FMEA), Poka-yoke or mistake proofing</li>
                  <li><strong>Continuous Improvement:</strong> Six Sigma (DMAI2C), statistical process control (SPC), design of experiment (DOE)</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>

              </Col>
              <Col className="wow fadeIn" data-wow-delay="0.5s" sm={4}>
                <Image className="aboutImage-margin" src="/images/iso.png" fluid />
              </Col>
              <Col sm={4}>

              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default CompanyPage;
