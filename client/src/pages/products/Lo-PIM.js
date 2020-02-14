import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal, Table } from "react-bootstrap";

import "./Products.css";
import "../../components/modal/modal-lp-sma";
import ModalLPSMA from "../../components/modal/modal-lp-sma";

class Lo_PIM extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Container className="wow fadeInDown" id="product-header">
          <Row>
            <Col sm={12} id="sp6t-col-12">
              <h3><strong>"HIGH PERFORMANCE" LO-PASSIVE INTERMODULATION SWITCHES</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container className="wow fadeIn">
          <Row>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/lo-pim-1.png" fluid />
            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/lo-pim-2.png" fluid />
            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/lo-pim-3.png" fluid />
            </Col>
            <Col sm={3}>
              <Image className="aboutImage-margin" src="/images/lo-pim-4.png" fluid />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col sm={3} className="loPimModalButton">
              <ModalLPSMA />
            </Col>
            <Col sm={3}>

            </Col>
            <Col sm={3}>

            </Col>
            <Col sm={3}>

            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <Row>
            <Table responsive bordered striped>
              <thead>
                <tr>
                  <th>Value</th>
                  <th>SMA</th>
                  <th>Type-N</th>
                  <th>7/16 DIN</th>
                  <th>4.3-10 mini DIN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Typical PIM Performance</td>
                  <td>-168 dBc</td>
                  <td>-173 dBc</td>
                  <td>-163 dBc</td>
                  <td>-160 dBc</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
        <br></br>
        <Row>
          <Col sm={12}>
            <p>e360microwave is a leading supplier of ultra-low passive intermodulation performance switches. Available in a variety of configurations and connector solutions including SMA, Type-N, 7/16 DIN and 4.3–10 mini DIN.  Our switches are commonly used in infrastructure applications as well as the testing of other components and cabling. Our low PIM switches are ideal for ensuring overall system PIM performance remains at a low level. Designed for long life and repeatability these switches reduce costs and provide excellent reliability. High isolation reduces cross talk between adjacent channels for overall system signal integrity.</p>
          </Col>
        </Row>
      </div>
    )
  }
};

export default Lo_PIM;
