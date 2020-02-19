import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class CardAdvanced extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>Advanced Tech Korea</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:morgan@atkorea.biz">Contact Email & Numbers:</a>&nbsp;&nbsp;031 345-7300  (o) | 031 360-6467 (f)</Card.Subtitle>
            <Card.Text>
              #1129 Doosan venturedigm
              <br></br>
              126-1 Pyungcheon-dong, dongahn-gu
              <br></br>
              Ahnyang-city Gyunggido, Korea 431-755
              </Card.Text>
            <Card.Link href="http://www.atkorea.biz/" target="blank">www.atkorea.biz</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardAdvanced;