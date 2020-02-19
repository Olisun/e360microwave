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
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:jkoltunik@pamcor.com">Jurek Koltunik 949 636 4037</a></Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:kkurisu@pamcor.com">Kurt Kurisu 714 273 8891</a></Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:rhamilton@pamcor.com">Bob Hamilton 805 320 7100</a></Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:hyacoub@pamcor.com">JHany Yacoub 949 439 1304</a></Card.Subtitle>
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