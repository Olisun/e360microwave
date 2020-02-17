import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Products.css";

class SP3T_SP6T extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Container className="wow fadeInDown" id="product-header">
          <Row>
            <Col sm={12} id="sp6t-col-12">
              <h3><strong>SPMT (SINGLE-POLE-MULTI-THROW)</strong></h3>
              <p>3, 4, 5 OR 6 POSITION SWITCHES</p>
              <p>STANDARD. INTERNAL OR EXTERNAL TERMINATIONS</p>
              <p>​UP TO 26.5 GHZ</p>
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeIn">
          <Row>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/sp6t-1.png" fluid />
            </Col>
            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/sp6t-2.png" fluid />
            </Col>

            <Col sm={4}>
              <Image className="aboutImage-margin" src="/images/sp6t-3.png" fluid />
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeIn">
          <Row>
            <Col sm={12}>
              <p>Single-Pole-Double-Throw (SPDT): This type of switch has three ports: one port in the center often referred to as the common and two output ports on either side of the common. The switch positions are selectable by a single actuation to connect the common and either output port. It is always connected to one or the other output port and never both at the same time. SPDTs are used for selecting between two power sources, swapping inputs, creating a ready mode and standby mode function or whenever two circuits need to switch between a common port.</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <p>e360 microwave offers SPDT switches with either failsafe or latching actuators and covering the frequency range from DC to 33.5 GHz with a wide variety of connectors types, actuator voltages and other options.</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <p>These switches are ideal for application specific switching between two signal paths and a common port. Frequently used in telecom and military markets as a stand-by switch and in testing stations to switch between other banks of switches. e360 microwave has one of largest selections of reliable, long life and feature rich coaxial switches in the market today.</p>
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeIn">
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>Features</th>
                <th>SP3T - SP6T</th>
                <th>SP3T - SP6T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Connector</td>
                <td>SMA-Female</td>
                <td>Type-N</td>
              </tr>
              <tr>
                <td>Actuator Type</td>
                <td>Normally Open or Latching</td>
                <td>Normally Open or Latching</td>
              </tr>
              <tr>
                <td>Frequency Range</td>
                <td>DC - 26.5 GHz</td>
                <td>DC - 12 GHz</td>
              </tr>
              <tr>
                <td>Temperature Range - Operational</td>
                <td>-25C to +65C</td>
                <td>-25C to +65C</td>
              </tr>
              <tr>
                <td>Actuator Voltages Available (DC) </td>
                <td>5V to 28V</td>
                <td>5V to 28V</td>
              </tr>
              <tr>
                <td>Control Connection</td>
                <td>Solder Lug or D-Sub (male pin)</td>
                <td>Solder Lug or ​D-Sub (male pin)</td>
              </tr>
            </tbody>
            <br></br>
            <thead>
              <tr>
                <th>Options</th>
                <th>SP3T - SP6T</th>
                <th>SP3T - SP6T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indicators</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>TTL Driver</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>TTL Decoder</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Self Cutoff *</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Positive (+) Common *</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Internal Terminations </td>
                <td>Yes</td>
                <td>---</td>
              </tr>
              <tr>
                <td>External Terminations </td>
                <td>Yes</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Transient Suppression Diodes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Narrow Body</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Epoxy Moisture Seal</td>
                <td>Yes</td>
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
        <Container className="wow fadeIn">
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>RF Performance, SMA-F</th>
                <th>DC - 6 GHz</th>
                <th>6 - 12 GHz</th>
                <th>12 - 18 GHz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSWR (max.)</td>
                <td>1.20:1</td>
                <td>1.30:1</td>
                <td>1.40:1</td>
              </tr>
              <tr>
                <td>Insertion Loss (max.) dB</td>
                <td>0.15</td>
                <td>0.25</td>
                <td>0.40</td>
              </tr>
              <tr>
                <td>Isolation (min.) dB</td>
                <td>80</td>
                <td>80</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Data Sheets: ​Standard</td>
                <td></td>
                <td>Normally Open, 18 GHz</td>
                <td>Latching, 18 GHz</td>
              </tr>
              <tr>
                <td>Data Sheets: ​Internal Terminations</td>
                <td></td>
                <td>Normally Open, 18 GHz</td>
                <td>Latching, 18 GHz</td>
              </tr>
              <tr>
                <td>Data Sheets: External Terminations</td>
                <td></td>
                <td><a href="mailto:techsupport@e360microwave.com">Contact Tech Support</a></td>
                <td><a href="mailto:techsupport@e360microwave.com">Contact Tech Support</a></td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br></br>
        <Container className="wow fadeIn">
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>RF Performance, SMA-F</th>
                <th>DC - 6 GHz</th>
                <th>6 - 12 GHz</th>
                <th>12 -18 GHz</th>
                <th>18 - 26.5 GHz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSWR (max.)</td>
                <td>1.25:1</td>
                <td>1.40:1</td>
                <td>1.50:1</td>
                <td>1.80:1</td>
              </tr>
              <tr>
                <td>Insertion Loss (max.) dB</td>
                <td>0.20</td>
                <td>0.40</td>
                <td>0.50</td>
                <td>0.80</td>
              </tr>
              <tr>
                <td>Isolation (min.) dB</td>
                <td>70</td>
                <td>60</td>
                <td>60</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Data Sheets: ​Standard</td>
                <td></td>
                <td></td>
                <td>Normally Open, 26.5 GHz</td>
                <td>Latching, 26.5 GHz</td>
              </tr>
              <tr>
                <td>Data Sheets: ​Internal Terminations</td>
                <td></td>
                <td></td>
                <td>Normally Open, 26.5 GHz</td>
                <td>Latching, 26.5 GHz</td>
              </tr>
              <tr>
                <td>Data Sheets: External Terminations</td>
                <td></td>
                <td></td>
                <td>Normally Open, 26.5 GHz</td>
                <td>Latching, 26.5 GHz</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br></br>
        <Container className="wow fadeInUp">
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>RF Performance, Type - N</th>
                <th>DC - 1 GHz</th>
                <th>1 - 4 GHz</th>
                <th>4 - 8 GHz</th>
                <th>8 - 12 GHz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSWR (max.)</td>
                <td>1.25:1</td>
                <td>1.40:1</td>
                <td>1.45:1</td>
                <td>1.70:1</td>
              </tr>
              <tr>
                <td>Insertion Loss (max.) dB</td>
                <td>0.30</td>
                <td>0.40</td>
                <td>0.40</td>
                <td>0.70</td>
              </tr>
              <tr>
                <td>Isolation (min.) dB</td>
                <td>70</td>
                <td>60</td>
                <td>60</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Data Sheets: Standard 12 GHz</td>
                <td></td>
                <td></td>
                <td>Normally Open</td>
                <td>Latching</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
};

export default SP3T_SP6T;
