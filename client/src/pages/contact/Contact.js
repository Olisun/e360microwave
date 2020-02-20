import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Card, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal } from "react-bootstrap";

import Carde360 from "../../components/card/Card-e360";
import CardRFAssoc from "../../components/card/Card-RFAssoc";
import CardSummitTech from "../../components/card/Card-SummitTech";
import CardPamcor from "../../components/card/Card-Pamcor";
import CardSeaPort from "../../components/card/Card-SeaPort";
import CardCDB from "../../components/card/Card-CDB";
import CardAtlantic from "../../components/card/Card-Atlantic";
import CardAdvanced from "../../components/card/Card-Advanced";
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
        <Row className="wow fadeIn">
          <Col sm={6}>
            <Container>
              <Row>
                <p className="territory"><strong>Located in the heart of Silicon Valley, the most unique and enterprising region in the world. e360 microwave is headquartered in Santa Clara is surrounded by the world’s largest corporations that lead the new digital age. Serviced by three international airports; San Francisco, Oakland and San Jose.</strong></p>
              </Row>
              <Carde360 />
            </Container>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <hr></hr>
        <Container className="wow fadeIn">
          <Row>
            <h5 className="territory-header"><strong>Sales Representatives, North America</strong></h5>
          </Row>
        </Container>
        <Row className="wow fadeIn">
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
                <p className="territory"><strong>New York, New Jersey, E. Pennsylvania</strong></p>
              </Row>
              <CardCDB />
            </Container>
            <Container>
              <Row>
                <p className="territory"><strong>Maryland, Washington DC, Virginia, Delaware</strong></p>
              </Row>
              <CardAtlantic />
            </Container>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <hr></hr>
        <Container className="wow fadeIn">
          <Row>
            <h5 className="territory-header"><strong>Sales Representatives, International</strong></h5>
          </Row>
        </Container>
        <Row className="wow fadeIn">
          <Col sm={6}>
            <Container>
              <Row>
                <p className="territory"><strong>South Korea</strong></p>
              </Row>
              <CardAdvanced />
            </Container>
          </Col>
        </Row>
      </div>
    )
  }
};

export default ContactPage;
