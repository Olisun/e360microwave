import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class CardCDB extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>CDB Evolution, Inc.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:tahlmore@optonline.net">Gary Tahlmore</a>&nbsp;&nbsp;(631) 692 5200</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:philton@optonline.net">Paul Hilton</a>&nbsp;&nbsp;631 692 5200</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:amatorrell@frontiernet.net">Mike Torrell</a>&nbsp;&nbsp;631 692 5200</Card.Subtitle>
            <Card.Text>
              PO Box 62 Wantagh,
              <br></br>
              New York, NY 11793
            </Card.Text>
            {/* bad email address for CDB */}
            <Card.Link href="http://www.cdbevolution.com/" target="blank">www.cdbevolution.com</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardCDB;