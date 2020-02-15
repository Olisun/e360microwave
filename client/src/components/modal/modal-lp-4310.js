import React, { Component, useState } from "react";
import { render } from 'react-dom';
import { Modal, Header, Footer, Title, Body, Button } from "react-bootstrap";
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Modal.css";
import "../../pages/products/Products.css"

const ModalLP4310 = (props) => {
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
                  <h3><strong>"4.3-10 MINI DIN CONNECTORS"</strong></h3>
                </Col>
              </Row>
            </Container>
            <Container className="wow fadeIn">
              <Row>
                <Col sm={4}>
                  <Image className="modal-image" src="/images/lp4310-1.png" fluid />
                </Col>
                <Col sm={4}>
                  <Image className="modal-image" src="/images/lp4310-2.png" fluid />
                </Col>
                <Col sm={4}>
                  <Image className="modal-image" src="/images/lp4310-3.png" fluid />
                </Col>
              </Row>
            </Container>
            <br></br>
            <Row>
              <Col sm={12}>
                <p>​​To meet the increasing demands for high performance, reduced size and weight while maintaining consistent ultra-low PIM repeatability, e360microwave has developed a family of switches to meet these requirements. Our switches with 4.3-10 DIN connectors offer excellent return loss and PIM performance independent from torque applied which greatly simplifies installation. Available today is a family of switches consisting of SPDT, Transfer and SPMT configurations with a wide variety of options and features. These switches are ideal for the latest evolution of base stations as well as distributed antenna systems (DAS) and small cell applications.</p>
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
                    <td>4.3-10 DIN</td>
                    <td>4.3-10 DIN</td>
                    <td>4.3-10 DIN</td>
                  </tr>
                  <tr>
                    <td>Actuator Type</td>
                    <td>Failsafe or Latching</td>
                    <td>Failsafe or Latching</td>
                    <td>Normally Open or Latching</td>
                  </tr>
                  <tr>
                    <td>Frequency Range</td>
                    <td>DC - 4.0 GHz</td>
                    <td>DC - 4.0 GHz</td>
                    <td>DC - 4.0 GHz</td>
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
                    <td>1.30:1</td>
                    <td>1.30:1</td>
                    <td>1.30:1</td>
                  </tr>
                  <tr>
                    <td>Insertion Loss max. (dB)</td>
                    <td>0.35</td>
                    <td>0.35</td>
                    <td>0.35</td>
                  </tr>
                  <tr>
                    <td>Isolation min. (dB)</td>
                    <td>80</td>
                    <td>80</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>PIM Performance</td>
                    <td>-160 dBc</td>
                    <td>-160 dBc</td>
                    <td>-160 dBc</td>
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

export default ModalLP4310;
