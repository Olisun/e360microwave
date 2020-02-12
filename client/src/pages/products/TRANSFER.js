import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Products.css";


class TRANSFER extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Container id="product-header">
          <Row className="wow zoomIn">
            <Col sm={12}>
              <h3><strong>TRANSFER SWITCHES</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={3}>

            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/transfer-1.png" fluid />
            </Col>

            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/transfer-2.png" fluid />
            </Col>
          </Row>
        </Container>
        <Container>
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>Features</th>
                <th>TRAN</th>
                <th>TRAN</th>
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
                <td>Failsafe or ​Latching</td>
                <td>Failsafe or ​Latching</td>
              </tr>
              <tr>
                <td>Frequency Range</td>
                <td>DC - 22 GHz</td>
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
                <th>TRAN</th>
                <th>TRAN</th>
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
                <td>---</td>
                <td>---</td>
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
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>External Terminations </td>
                <td>---</td>
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
        <Container>
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>RF Performance, SMA-F</th>
                <th>DC - 6 GHz</th>
                <th>6 - 12 GHz</th>
                <th>S12 - 18 GHz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSWR (max.)</td>
                <td>1.25:1</td>
                <td>1.30:1</td>
                <td>1.40:1</td>
              </tr>
              <tr>
                <td>Insertion Loss (max.) dB</td>
                <td>0.20</td>
                <td>0.30</td>
                <td>0.50</td>
              </tr>
              <tr>
                <td>Isolation (min.) dB</td>
                <td>70</td>
                <td>60</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Data Sheets: ​Transfer Standard</td>
                <td></td>
                <td>Failsafe, 18 GHz</td>
                <td>Latching, 18 GHz</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br></br>
        <Container>
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>RF Performance, 2.92mm (K)</th>
                <th>DC - 6 GHz</th>
                <th>6 - 12 GHz</th>
                <th>12 -18 GHz</th>
                <th>18 - 30 GHz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSWR (max.)</td>
                <td>1.20:1</td>
                <td>1.30:1</td>
                <td>1.40:1</td>
                <td>1.40:1</td>
              </tr>
              <tr>
                <td>Insertion Loss (max.) dB</td>
                <td>0.20</td>
                <td>0.30</td>
                <td>0.50</td>
                <td>0.80</td>
              </tr>
              <tr>
                <td>Isolation (min.) dB</td>
                <td>80</td>
                <td>70</td>
                <td>65</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Data Sheets: ​Transfer Standard</td>
                <td></td>
                <td></td>
                <td>Failsafe, 30 GHz</td>
                <td>Latching, 30 GHz</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <br></br>
        <Container>
          <Table responsive bordered striped>
            <thead>
              <tr>
                <th>RF Performance, Type - N</th>
                <th>DC - 1 GHz</th>
                <th>1 - 4 GHz</th>
                <th>4 - 12 GHz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSWR (max.)</td>
                <td>1.25:1</td>
                <td>1.25:1</td>
                <td>1.70:1</td>
              </tr>
              <tr>
                <td>Insertion Loss (max.) dB</td>
                <td>0.20</td>
                <td>0.20</td>
                <td>0.70</td>
              </tr>
              <tr>
                <td>Isolation (min.) dB</td>
                <td>70</td>
                <td>70</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Data Sheets: Transfer Standard</td>
                <td></td>
                <td>Failsafe</td>
                <td>Latching</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
};

export default TRANSFER;
