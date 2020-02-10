import React, { Component } from 'react';
import { render } from "react-dom";
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid } from "react-bootstrap";

import Hero from "../../components/hero/Hero";
import "./Home.css";

class HomePage extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    const { title, subTitle, text, typed } = this.props;
    return (
      <div>
        <div className="wow zoomIn">
          <Hero id="hero"
            title={title}
            className="wow zoomIn"
            data-wow-duration="1.5s"
          />
        </div>
        <div className="container">
          <Container>
            <Row>
              <Col sm={8}>
                <h5><strong>e360 microwave, inc is a diverse RF/Microwave technology provider founded on 30+ years of experience with innovation and engineering excellence.</strong></h5>
              </Col>
              <Col sm={4}>
                <Image src="/images/logo.png" fluid />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p>e360 microwave’s products and technology serve multiple applications within several primary end markets: wired infrastructure, wireless communications, enterprise, defense/government and others. Applications for our products in these markets include telecommunication infrastructure, base stations, point-to-point communications, broadband access and IoT. In addition, our products are used in all levels and phases of testing. Levels: semiconductor wafer probe testing, packaged devices, modules and the end product or system. Phases: bench testing, low rate production to highly sophisticated automatic test equipment (ATE) solutions for mass production.</p>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <h5><strong>Our Value ​Proposition</strong></h5>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p>e360 microwave is a RF/Microwave technology focused company. We design and deliver high performance products with intrinsic reliability and low cost of ownership. We build long term partnerships with our employees and customers that are kept in perfect alignment through engagement, proactive communication and exceptional support</p>
              </Col>
              <Col sm>
                <Image src="/images/logo.png" fluid />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default HomePage
