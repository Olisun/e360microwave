import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class CardSummitTech extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>Summit Technical Marketing, LLC</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:page@summittmc.com">Page Thibodeaux</a>&nbsp;&nbsp;(415) 519-7667</Card.Subtitle>
            <Card.Text>
              2310 Homestead Road, C1 #203
              <br></br>
              Los Altos, CA  94024
            </Card.Text>
            <Card.Link href="http://www.summittmc.com/" target="blank ">www.summittmc.com</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardSummitTech;