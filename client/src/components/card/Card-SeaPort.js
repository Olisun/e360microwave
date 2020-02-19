import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class CardSeaPort extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>Sea-Port Technical Sales, Inc</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:tom@seaporttech.com">Tom Raschko 425 702 8300 (m), 425 785 8553  (m)</a></Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:s.pennock@comcast.net">Steve Pennock 425 702 8300</a></Card.Subtitle>
            <Card.Text>
              6513 132nd Ave NE
              <br></br>
              Suite 168
              <br></br>
              Kirkland, WA 98033
              </Card.Text>
            <Card.Link href="http://www.seaporttech.com/" target="blank">www.seaporttech.com</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardSeaPort;