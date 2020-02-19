import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class CardRFAssoc extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>RF Associates, Inc.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:kevint@rfassociates-ne.com">Kevin Taylor</a>&nbsp;&nbsp;(978) 887-9762</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:russc@rfassociates-ne.com">Russ Cooley</a>&nbsp;&nbsp;(978) 887-9762</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:marcg@rfassociates-ne.com​">Marc Guy</a>&nbsp;&nbsp;(978) 887-9762</Card.Subtitle>
            <Card.Text>
              430 Boston Street, Suite #206
              <br></br>
              Topsfield, MA 01983
              </Card.Text>
            <Card.Link href="http://www.rfassociates-ne.com" target="blank ">www.rfassociates-ne.com</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardRFAssoc;