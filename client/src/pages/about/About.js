import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal } from "react-bootstrap";

import "./About.css"

class AboutPage extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <div className="section-container">
          <Container>
            <Row className="wow zoomIn">
              <Col sm={8}>
                <h5><strong>WHO WE ARE</strong></h5>
              </Col>
              <Col sm={4}></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p><strong>We are a Silicon Valley based RF/Microwave technology company focused on high value solutions.</strong></p>
              </Col>
              <Col sm></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p>e360 microwave is building on the goodwill of a California corporation launched in 2007. The new name "e360 microwave" represents all around excellence with RF and microwave technology. The e360 brand also brings a new, broader and more focused direction to the company.</p>
              </Col>
              <Col sm></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p>We are a team of industry experts, each with 20+ years of RF/Microwave experience ranging from RF semiconductors to active and passive components to system level solutions. Our executive experience at Fortune 500 corporations where we envisioned, defined and successfully executed on strategic initiatives in engineering, operations and business development shapes our corporate discipline. Coupled with leading several dynamic, highly customer focused start-up companies, affords us with an excellent balance between "structure" and "customer obsession".</p>
              </Col>
              <Col sm></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p><strong>​Creativity, ingenuity and practicality describes our team when it comes to satisfying our customers requirements.</strong></p>
              </Col>
              <Col sm></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p>Our standard products are available in failsafe, latching and normally open operations with a wide variety of voltages, connectors and features. In addition to these products we offer derivative designs with custom performance or specific levels of screening on a quick turn basis. For those customers seeking a totally custom design, our experienced staff of engineers would welcome the opportunity to discuss your requirements.</p>
              </Col>
              <Col sm></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p><strong>​We've created many standard products but we also love new projects! Let's get started.</strong></p>
              </Col>
              <Col sm></Col>
            </Row>
          </Container>
        </div>
        <div className="section-container">
          <Container>
            <Row>
              <Col sm={4}></Col>
              <Col sm={8}>
                <h5><strong>TECHNOLOGY</strong></h5>
              </Col>
            </Row>
            <Row>
              <Col sm={4}></Col>
              <Col sm={8}>
                <p><strong>One Word...<i>"Diverse"</i></strong></p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}></Col>
              <Col sm={7}>
                <p>The engineering team at e360 microwave has a long and diverse background of designing innovative solutions with active and passive RF and microwave devices, components, modules, subsystems and systems. Spanning the frequency spectrum of DC to 40 GHz our products and solutions are designed for optimum performance and manufacturability.</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}></Col>
              <Col sm={8}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Some of the technologies include:
                <ul>
                    <li>RF. Microwave and mmWave</li>
                    <li>Wireless, Wireline and Fiber Optic</li>
                    <li>Semiconductor and Electromechanical</li>
                    <li>Coaxial, Waveguide and Surface Mount</li>
                    <li>Multi-function Modules</li>
                    <li>Thick Film and Thin Film</li>
                    <li>Injection Molding and Die Casting</li>
                    <li>Precision Machining</li>
                    <li>Software</li>
                    <li>World Class Manufacturing Operations</li>
                  </ul>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-container">
          <Container>
            <Row className="wow zoomIn">
              <Col sm={8}>
                <h5><strong>LEADERSHIP</strong></h5>
              </Col>
              <Col sm={4}></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p><strong>Leadership in action</strong></p>
              </Col>
              <Col sm></Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p>The leadership team at e360microwave is comprised of engineering experts and management executives from some of the largest RF and microwave corporations in the industry. We have a strong reputation for successful and profitable growth based on treating our employees and customers fairly and professionally.</p>
              </Col>
              <Col sm></Col>
            </Row>
          </Container>
        </div>
        <div className="section-container">
          <Container>
            <Row className="wow zoomIn">
              <Col sm={5}></Col>
              <Col sm={5}>
                <h5><strong>MARKETS</strong></h5>
              </Col>
              <Col sm={5}></Col>
            </Row>
            <Row id="markets-row">
              <Col sm={2}>
                <p>TEST EQUIPMENT</p>
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
              </Col>
              <Col sm={2}>
                <p>AEROSPACE / TRANSPORTATION</p>
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
              </Col>
              <Col sm={2}>
                <p>GOVERNMENT / DEFENSE</p>
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
              </Col>
              <Col sm={2}>
                <p>WIRELESS / TELECOM</p>
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
              </Col>
              <Col sm={2}>
                <p>ENTERPRISE / SEMICONDUCTOR</p>
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
              </Col>
              <Col sm={2}>
                <p>MEDICAL / INDUSTRIAL</p>
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
                <Image className="aboutImage-margin" src="/images/logo.png" fluid />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
};

export default AboutPage;
