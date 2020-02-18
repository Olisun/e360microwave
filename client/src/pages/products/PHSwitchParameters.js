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
        <Container className="wow fadeIn">
          <Row>
            <Col sm={6}>
              <Image className="aboutImage-margin" src="/images/power-handling.png" fluid />
            </Col>
            <Col sm={6}>
              <h5 id="TypicalSwitchParams"><strong>Typical Switch Parameters</strong></h5>
              <Table responsive bordered striped>
                <tbody>
                  <tr>
                    <td>Switch Type:</td>
                    <td>-Electromechanical, Coaxial</td>
                  </tr>
                  <tr>
                    <td>RF Contracts:</td>
                    <td>Break before Make</td>
                  </tr>
                  <tr>
                    <td>Characteristic Impedance</td>
                    <td>S0 Ohmn (75 Ohmn available for SPDT upon request)</td>
                  </tr>
                  <tr>
                    <td>Temperature Range:</td>
                    <td>-25° C to +65° C Operating</td>
                  </tr>
                  <tr>
                    <td>Wider Temperature Range:</td>
                    <td>-54° C to +85° C Operating</td>
                  </tr>
                  <tr>
                    <td>Humidity:</td>
                    <td>Moisture Seal Available</td>
                  </tr>
                  <tr>
                    <td>Shock:</td>
                    <td>MIL-STD-202-Method 213, Condition D (500G Non-Operating)</td>
                  </tr>
                  <tr>
                    <td>Vibration:</td>
                    <td>MIL-STD-202-Method 214, Condition D (10G RMS Non-Operating)</td>
                  </tr>
                  <tr>
                    <td>Switches Life Actuations</td>
                    <td>Failsafe - 2 Million Cycles; Latching - 5 Million Cycles; Normally Open - 2 Million Cycles</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default PHSwitchParameters;
