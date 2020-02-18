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
      <div className="container" className="about-page">
        <Container className="wow fadeInDown" id="companyOverview">
          <Row>
            <Col sm={12}>
              <h3><strong>ABOUT E360 MICROWAVE</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeIn" scroll={true}>
          <Row>
            <Col sm={8}>
              <h5><strong>e360 microwave, inc is a diverse RF/Microwave technology provider founded on 30+ years of experience with innovation and engineering excellence.</strong></h5>
              <br></br>
              <p>e360 microwave’s products and technology serve multiple applications within several primary end markets: wired infrastructure, wireless communications, enterprise, defense/government and others. Applications for our products in these markets include telecommunication infrastructure, base stations, point-to-point communications, broadband access and IoT. In addition, our products are used in all levels and phases of testing. Levels: semiconductor wafer probe testing, packaged devices, modules and the end product or system. Phases: bench testing, low rate production to highly sophisticated automatic test equipment (ATE) solutions for mass production.</p>
            </Col>
            <Col sm={4}>
              <Image src="/images/about-1.png" fluid />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col sm={8}>
              <h5><strong>Our Value ​Proposition</strong></h5>
              <br></br>
              <p>e360 microwave is a RF/Microwave technology focused company. We design and deliver high performance products with intrinsic reliability and low cost of ownership. We build long term partnerships with our employees and customers that are kept in perfect alignment through engagement, proactive communication and exceptional support</p>
            </Col>
            <Col sm>
              <Image src="/images/about-2.png" fluid />
            </Col>
          </Row>
        </Container>
        <br></br>
        <hr></hr>
        <Container className="wow fadeInRight">
          <Row>
            <Col sm={8}>
              <h5><strong>WHO WE ARE</strong></h5>
              <p><strong>We are a Silicon Valley based RF/Microwave technology company focused on high value solutions.</strong></p>
              <p>e360 microwave is building on the goodwill of a California corporation launched in 2007. The new name "e360 microwave" represents all around excellence with RF and microwave technology. The e360 brand also brings a new, broader and more focused direction to the company.</p>
              <p>We are a team of industry experts, each with 20+ years of RF/Microwave experience ranging from RF semiconductors to active and passive components to system level solutions. Our executive experience at Fortune 500 corporations where we envisioned, defined and successfully executed on strategic initiatives in engineering, operations and business development shapes our corporate discipline. Coupled with leading several dynamic, highly customer focused start-up companies, affords us with an excellent balance between "structure" and "customer obsession".</p>
            </Col>
            <Col sm={4}></Col>
          </Row>
          <Row>
            <Col sm={8}>
              <p><strong>​Creativity, ingenuity and practicality describes our team when it comes to satisfying our customers requirements.</strong></p>
              <p>Our standard products are available in failsafe, latching and normally open operations with a wide variety of voltages, connectors and features. In addition to these products we offer derivative designs with custom performance or specific levels of screening on a quick turn basis. For those customers seeking a totally custom design, our experienced staff of engineers would welcome the opportunity to discuss your requirements.</p>
              <p><strong>​We've created many standard products but we also love new projects! Let's get started.</strong></p>
            </Col>
            <Col sm={4}>
              <Image src="/images/whoWeAre.png" fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={8}>

            </Col>
            <Col sm></Col>
          </Row>
        </Container>
        <br></br>
        <hr></hr>
        <Container className="wow fadeInLeft">
          <Row>
            <Col sm={4}>
              <Image src="/images/technology.png" fluid />
            </Col>
            <Col sm={8}>
              <h5><strong>TECHNOLOGY</strong></h5>
              <p><strong>One Word...<i>"Diverse"</i></strong></p>
              <p>The engineering team at e360 microwave has a long and diverse background of designing innovative solutions with active and passive RF and microwave devices, components, modules, subsystems and systems. Spanning the frequency spectrum of DC to 40 GHz our products and solutions are designed for optimum performance and manufacturability.</p>
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
        <br></br>
        <hr></hr>
        <Container className="wow fadeInRight">
          <Row>
            <Col sm={8}>
              <h5><strong>LEADERSHIP</strong></h5>
              <p><strong>Leadership in action</strong></p>
              <p>The leadership team at e360microwave is comprised of engineering experts and management executives from some of the largest RF and microwave corporations in the industry. We have a strong reputation for successful and profitable growth based on treating our employees and customers fairly and professionally.</p>
            </Col>
            <Col sm={4}>
              <Image src="/images/leadership.png" fluid />
            </Col>
          </Row>
        </Container>
        <br></br>
        <hr></hr>
        <Container className="wow fadeInUp" scroll={true}>
          <Row>
            <Col sm={5}></Col>
            <Col sm={5}>
              <h5><strong>MARKETS</strong></h5>
            </Col>
            <Col sm={5}></Col>
          </Row>
          <Row id="markets-row">
            <Col sm={2}>
              <p className="about">TEST EQUIPMENT</p>
              <Image className="aboutImage-margin" src="/images/test-1.png" fluid />
              <Image className="aboutImage-margin" src="/images/test-2.png" fluid />
              <Image className="aboutImage-margin" src="/images/test-3.png" fluid />
              <Image className="aboutImage-margin" src="/images/test-4.png" fluid />
            </Col>
            <Col sm={2}>
              <p className="about">AEROSPACE / TRANSPORTATION</p>
              <Image className="aboutImage-margin" src="/images/aerospace-1.png" fluid />
              <Image className="aboutImage-margin" src="/images/aerospace-2.png" fluid />
              <Image className="aboutImage-margin" src="/images/aerospace-3.png" fluid />
              <Image className="aboutImage-margin" src="/images/aerospace-4.png" fluid />
              <Image className="aboutImage-margin" src="/images/aerospace-5.png" fluid />
            </Col>
            <Col sm={2}>
              <p className="about">GOVERNMENT / DEFENSE</p>
              <Image className="aboutImage-margin" src="/images/government-1.png" fluid />
              <Image className="aboutImage-margin" src="/images/government-2.png" fluid />
              <Image className="aboutImage-margin" src="/images/government-3.png" fluid />
              <Image className="aboutImage-margin" src="/images/government-4.png" fluid />
              <Image className="aboutImage-margin" src="/images/government-5.png" fluid />
            </Col>
            <Col sm={2}>
              <p className="about">WIRELESS / TELECOM</p>
              <Image className="aboutImage-margin" src="/images/wireless-1.png" fluid />
              <Image className="aboutImage-margin" src="/images/wireless-2.png" fluid />
              <Image className="aboutImage-margin" src="/images/wireless-3.png" fluid />
              <Image className="aboutImage-margin" src="/images/wireless-4.png" fluid />
            </Col>
            <Col sm={2}>
              <p className="about">ENTERPRISE / SEMICONDUCTOR</p>
              <Image className="aboutImage-margin" src="/images/enterprise-1.png" fluid />
              <Image className="aboutImage-margin" src="/images/enterprise-2.png" fluid />
              <Image className="aboutImage-margin" src="/images/enterprise-3.png" fluid />
              <Image className="aboutImage-margin" src="/images/enterprise-4.png" fluid />
            </Col>
            <Col sm={2}>
              <p className="about">MEDICAL / INDUSTRIAL</p>
              <Image className="aboutImage-margin" src="/images/medical-1.png" fluid />
              <Image className="aboutImage-margin" src="/images/medical-2.png" fluid />
              <Image className="aboutImage-margin" src="/images/medical-3.png" fluid />
              <Image className="aboutImage-margin" src="/images/medical-4.png" fluid />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default AboutPage;
