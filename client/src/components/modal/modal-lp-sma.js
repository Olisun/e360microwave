import React, { Component, useState } from "react";
import { render } from 'react-dom';
import { Modal, Header, Footer, Title, Body, Button } from "react-bootstrap";
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Modal.css";
import "../../pages/products/Products.css"

const ModalLPSMA = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(true)}>
        Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body closeButton>
          <div className="modal-container">
            <Container className="wow fadeInDown" id="product-header">
              <Row>
                <Col sm={12} id="sp6t-col-12">
                  <h3><strong>LOW PASSIVE INTERMODULATION (LO-PIM)</strong></h3>
                  <h3><strong>"SMA CONNECTORS"</strong></h3>
                </Col>
              </Row>
            </Container>
            <Container className="wow fadeIn">
              <Row>
                <Col sm={4}>
                  <Image className="modal-image" src="/images/lpSMA-1.png" fluid />
                </Col>
                <Col sm={4}>
                  <Image className="modal-image" src="/images/lpSMA-2.png" fluid />
                </Col>
                <Col sm={4}>
                  <Image className="modal-image" src="/images/lpSMA-3.png" fluid />
                </Col>
              </Row>
            </Container>
            <br></br>
            <Row>
              <Col sm={12}>
                <p>​​​e360microwave offers a family of low PIM switches based on our standard designs to keep costs low. This family of SPDT, Transfer and SPMT switches with SMA connectors receive special treatment and design enhancements to optimize PIM performance. Available with failsafe, latching or normally open actuators with a variety of voltages, features and options.</p>
              </Col>
            </Row>
            <Container>
              <Table responsive bordered striped>
                <thead>
                  <tr>
                    <th>Features / Type</th>
                    <th>SPDT Lo-PIM</th>
                    <th>TRAN Lo-PIM</th>
                    <th>SPMT Lo-PIM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Connector</td>
                    <td>SMA-F</td>
                    <td>SMA-F</td>
                    <td>SMA-F</td>
                  </tr>
                  <tr>
                    <td>Actuator Type</td>
                    <td>Failsafe or Latching</td>
                    <td>Failsafe or Latching</td>
                    <td>Normally Open or Latching</td>
                  </tr>
                  <tr>
                    <td>Frequency Range</td>
                    <td>DC - 18.0 GHz</td>
                    <td>DC - 18.0 GHz</td>
                    <td>DC - 18.0 GHz</td>
                  </tr>
                  <tr>
                    <td>Actuator Voltages Available (DC) </td>
                    <td>5V to 38V</td>
                    <td>5V to 38V</td>
                    <td>5V to 38V</td>
                  </tr>
                  <tr>
                    <td>Oper. Temp. degrees C</td>
                    <td>-25 to +70</td>
                    <td>-25 to +70</td>
                    <td>-25 to +70</td>
                  </tr>
                  <tr>
                    <td>Control Connection</td>
                    <td>Pin Terminal or D-Sub</td>
                    <td>Pin Terminal or ​D-Sub</td>
                    <td>Pin Terminal or ​D-Sub</td>
                  </tr>
                </tbody>
                <br></br>
                <thead>
                  <tr>
                    <th>Options</th>
                    <th>SPDT Lo-PIM</th>
                    <th>TRAN Lo-PIM</th>
                    <th>SPMT Lo-PIM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Indicators</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>TTL Driver</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Self Cutoff *</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Decoders</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Transient Supperssion Diodes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Positive Common</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Epoxy Seal</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
                <br></br>
                <thead>
                  <tr>
                    <th>RF Specification</th>
                    <th>SPDT Lo-PIM</th>
                    <th>TRAN Lo-PIM</th>
                    <th>SPMT Lo-PIM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>VSWR</td>
                    <td>1.25:1</td>
                    <td>1.25:1</td>
                    <td>1.25:1</td>
                  </tr>
                  <tr>
                    <td>Insertion Loss max. (dB)</td>
                    <td>0.20</td>
                    <td>0.30</td>
                    <td>0.30</td>
                  </tr>
                  <tr>
                    <td>Isolation min. (dB)</td>
                    <td>70</td>
                    <td>70</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>PIM Performance</td>
                    <td>-168 dBc</td>
                    <td>-168 dBc</td>
                    <td>-168 dBc</td>
                  </tr>
                </tbody>
              </Table>
              <Row>
                <Col sm={12}>
                  <p><i>* self-cutoff feature applies to Latching models only</i></p>
                </Col>
              </Row>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLPSMA;
