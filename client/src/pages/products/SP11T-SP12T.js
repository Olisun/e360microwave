import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Products.css";

class SP11T_SP12T extends Component {
  componentDidMount() {
    new WOW().init()
  }


  render() {
    return (
      <div className="container">
        <Container className="wow zoomIn" id="product-header">
          <Row>
            <Col sm={12} id="sp6t-col-12">
              <h3><strong>SPMT (SINGLE-POLE-MULTI-THROW)</strong></h3>
              <p>11 OR 12 POSITION SWITCHES</p>
              <p>​STANDARD. INTERNAL OR EXTERNAL TERMINATIONS</p>
              <p>​UP TO 12.0 GHZ</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={3}>

            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/sp12t-1.png" fluid />
            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/sp12t-2.png" fluid />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12}>
              <p>Single-Pole-Multi-Throw (SPMT): This type of coaxial RF / Microwave switch has a common input port and, for this model series, up to twelve (12) individually selectable output paths. These coaxial switches are available with Normally Open or Latching actuators with or without internal terminations. We offer a wide selection of models that features indicators, TTL drivers, self-cut off circuits, positive (+) polarity and more.</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <p>e360 microwave produces many SPMT coaxial switch designs and can meet most requirements. Contact us for a RF / Microwave coaxial switch from stock or one with standard options made to order and customer designed switches.</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <p>SPMT coaxial switches with up to 10 paths are ideal for applications where >6 output paths are needed, flat switching configurations are preferred and low insertion loss is a must. Applications range from product development bench testing to RF / Microwave switch matrix interfaces to large volume production testing employing automatic test equipment (ATE) where reliability, long life and excellent insertion loss repeatability are required. </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>Features</th>
                <th>SP11T - SP12T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Connector</td>
                <td>SMA-Female</td>
              </tr>
              <tr>
                <td>Actuator Type</td>
                <td>Normally Open or Latching</td>
              </tr>
              <tr>
                <td>Frequency Range</td>
                <td>DC- 12 GHz</td>
              </tr>
              <tr>
                <td>Temperature Range - Operational</td>
                <td>-25C to +65C</td>
              </tr>
              <tr>
                <td>Actuator Voltages Available (DC) </td>
                <td>5V to 28V</td>
              </tr>
              <tr>
                <td>Control Connection</td>
                <td>Solder Lug or D-Sub (male pin)</td>
              </tr>
            </tbody>
            <br></br>
            <thead>
              <tr>
                <th>Options</th>
                <th>SP11T - SP12T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indicators</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>TTL Driver</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>TTL Decoder</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Self Cutoff *</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Positive (+) Common *</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Internal Terminations </td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>External Terminations </td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Transient Suppression Diodes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Narrow Body</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Epoxy Moisture Seal</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col sm={12}>
              <p id="latching-models"><i>* Latching models only</i></p>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>RF Performance, SMA-F</th>
                <th>DC - 6 GHz</th>
                <th>6 - 12 GHz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSWR (max.)</td>
                <td>1.30:1</td>
                <td>1.50:1</td>
              </tr>
              <tr>
                <td>Insertion Loss (max.) dB</td>
                <td>0.30</td>
                <td>0.60</td>
              </tr>
              <tr>
                <td>Isolation (min.) dB</td>
                <td>80</td>
                <td>75</td>
              </tr>
              <tr>
                <td>Data Sheets: ​Standard</td>
                <td>Normally Open, 12 GHz</td>
                <td>Latching, 12 Ghz</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
};

export default SP11T_SP12T;
