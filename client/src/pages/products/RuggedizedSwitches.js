import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Products.css";

class RuggedizedSwitches extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Container className="wow fadeInDown" id="product-header">
          <Row>
            <Col sm={12} id="sp6t-col-12">
              <h3><strong>RUGGEDIZED SWITCHES EXTENDED OPERATING TEMPERATURE AND MOISTURE SEALING</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeIn">
          <Row>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/ruggedized-1.png" fluid />
            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/ruggedized-2.png" fluid />
            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/ruggedized-3.png" fluid />
            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/ruggedized-4.png" fluid />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col sm={12}>
              <p>A rugged switch is a switch specifically designed to operate reliably in harsh usage environments and conditions, such as extreme temperatures and wet or dusty conditions. e360microwave offers a full line of RF/microwave switches capable of operating in extreme temperatures ranging from -54° C to +85° C and high humidity conditions with two levels of moisture sealing from water resistant/splash proof to full immersion sealing.</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <p id="ruggedized"><strong>To order a ruggedized part, select the desired switch type with all the required features and options and add the letter “R” at the end of the model number. See model numbering system for a complete list of features and options.</strong></p>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container className="wow fadeIn">
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>Enhancements</th>
                <th>Specification</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating Temperature</td>
                <td>-54° C to +85° C</td>
                <td>-40° C to +85° C with TTL or Indicators ​Options</td>
              </tr>
              <tr>
                <td>Storage Temperature</td>
                <td>-55° C to +125° C</td>
                <td></td>
              </tr>
              <tr>
                <td>Moisture Seal : Level I</td>
                <td>Splash-Proof (resistant)</td>
                <td>IP64</td>
              </tr>
              <tr>
                <td>Moisture Seal : Level II</td>
                <td>Water-Proof (Immersion)</td>
                <td>IP68 (up to 1m and 30 minutes)</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br></br>
        <Container className="wow fadeInUp">
          <Row>
            <Col sm={12}>
              <h4 id="ruggedized2"><strong>Moisture Sealing: <i>Splash-Proof or Water-Proof</i></strong></h4>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Image className="aboutImage-margin" src="/images/ruggedized-5.png" fluid />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default RuggedizedSwitches;
