import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typed from "react-typed";
import { WOW } from 'wowjs/dist/wow';

import "./Hero.css"
// import ControlledCarousel from "../carousel/Carousel";
import Cube from "../../components/cube/Cube";


class Hero extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    const { title, subTitle, text } = this.props;
    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              <div className="wow fadeInDown">
                <Cube />

              </div>
              {title && <h1 className="display-3 font-weight-bolder">{title}</h1>}
              <div id="typed-hero">
                <Typed
                  typedRef={(typed) => { this.typed = typed; }}
                  strings={["Technology ​for everything wireless and the testing there of..."]}
                  typeSpeed={40}
                  startDelay={1000}
                // backSpeed={50}
                // loop
                />
              </div>
              {/* <div id="carousel">
                <ControlledCarousel />
              </div> */}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}

export default Hero
