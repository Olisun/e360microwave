import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Card, Image, rounded, fluid, ListGroup, ListGroupItem, horizontal } from "react-bootstrap";

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
          <Row>
            <p><strong>Connecticut, Maine, Massachusetts, New Hampshire, Rohde Island, Vermont</strong></p>
          </Row>
          <Card style={{ width: '27rem' }}>
            <Card.Body>
              <Card.Title>RF Associates, Inc.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><a href="mailto:kevint@rfassociates-ne.com">Kevin Taylor</a></Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted"><a href="mailto:russc@rfassociates-ne.com">Russ Cooley</a></Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted"><a href="mailto:marcg@rfassociates-ne.com​">Marc Guy</a></Card.Subtitle>
              <Card.Text>
                430 Boston Street, Suite #206
                <br></br>
                Topsfield, MA 01983
                <br></br>
                Office: 978-887-9762
              </Card.Text>
              <Card.Link href="http://www.rfassociates-ne.com/index.html" target="blank ">www.rfassociates-ne.com</Card.Link>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
};

export default ContactPage;
