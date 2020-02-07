import React, { Component } from 'react';
import { render } from "react-dom";
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container } from "react-bootstrap";

import Hero from "../components/Hero";

class HomePage extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    const { title, subTitle, text } = this.props;
    return (
      <div>
        <div className="wow zoomIn">
          <Hero
            title={title}
            subTitle={subTitle}
            text={text}
            className="wow zoomIn"
            data-wow-duration="1.5s"
          />
        </div>
        <div className="container">
          <Container>
            <Row>
              <Col sm={8}>sm=8</Col>
              <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default HomePage
