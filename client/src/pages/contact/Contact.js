import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Card, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal } from "react-bootstrap";

import CardRFAssoc from "../../components/card/Card-RFAssoc";
import CardSummitTech from "../../components/card/Card-SummitTech";
import CardPamcor from "../../components/card/Card-Pamcor";
import CardSeaPort from "../../components/card/Card-SeaPort";
import "./Contact.css";

class ContactPage extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Container className="wow fadeInDown" id="companyOverview">
          <Row>
            <Col sm={12}>
              <h3><strong>CONTACT US</strong></h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <h5><strong>North America</strong></h5>
          </Row>
        </Container>
        <Row>
          <Col sm={6}>
            <Container>
              <Row>
                <p className="territory"><strong>Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, Vermont</strong></p>
              </Row>
              <CardRFAssoc />
            </Container>
            <Container>
              <Row>
                <p className="territory"><strong>Northern California, Northern Nevada</strong></p>
              </Row>
              <CardSummitTech />
            </Container>
            <Container>
              <Row>
                <p className="territory"><strong>Southern California, Southern Nevada</strong></p>
              </Row>
              <CardPamcor />
            </Container>
          </Col>
          <Col sm={6}>
            <Container>
              <Row>
                <p className="territory"><strong>Oregon, Washington, Idaho</strong></p>
              </Row>
              <CardSeaPort />
            </Container>
            <Container>
              <Row>
                <p className="territory"><strong>Northern California, Northern Nevada</strong></p>
              </Row>
              <CardSummitTech />
            </Container>
            <Container>
              <Row>
                <p className="territory"><strong>Southern California, Southern Nevada</strong></p>
              </Row>
              <CardPamcor />
            </Container>
          </Col>
        </Row>


      </div>
    )
  }
};

export default ContactPage;
