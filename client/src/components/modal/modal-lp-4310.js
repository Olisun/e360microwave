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
        See Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <div className="modal-container">
            <Container className="wow fadeInDown" id="product-header">
              <Row>
                <Col sm={12} id="sp6t-col-12">
                  <h3><strong>LOW PASSIVE INTERMODULATION (LO-PIM)"4.3-10 MINI DIN CONNECTORS"</strong></h3>
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
                <p>​Our line of low PIM switches with 7/16 DIN connectors offer excellent performance and durability. e360microwave’s innovative line of low PIM switches are available with failsafe, latching or normally open actuators and a wide variety of voltages and options. 7/16 connectors provide superior performance for both return loss and intermodulation distortion. The connectors are very robust and stable making them suitable for telecommunications infrastructure applications.</p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLP4310;
