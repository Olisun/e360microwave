import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class CardPamcor extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>Pamcor, Inc</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:jkoltunik@pamcor.com">Jurek Koltunik</a>&nbsp;&nbsp;(949) 636-4037</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:kkurisu@pamcor.com">Kurt Kurisu</a>&nbsp;&nbsp;(714) 273-8891</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:rhamilton@pamcor.com">Bob Hamilton</a>&nbsp;&nbsp;(805) 320-7100</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:hyacoub@pamcor.com">JHany Yacoub</a>&nbsp;&nbsp;(949 439-1304</Card.Subtitle>
            <Card.Text>
              4000 Long Beach Blvd,
              <br></br>
              Suite 207
              <br></br>
              Long Beach, CA 90807
            </Card.Text>
            <Card.Link href="http://www.pamcor.com/" target="blank">www.pamcor.com</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardPamcor;