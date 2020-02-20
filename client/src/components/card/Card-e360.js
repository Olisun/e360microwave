import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class Carde360 extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>e360microwave, inc.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:sales@e360microwave.com">Email Sales</a>&nbsp;&nbsp;(408) 650-8360 ext 1</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:info@e360microwave.com">Email to Request Information</a>&nbsp;&nbsp;(408) 650-8360 ext 1</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:custservice@e360microwave.com">Email Customer Service</a>&nbsp;&nbsp;(408) 650-8360 ext 1</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:techsupport@e360microwave.com">Email Technical Support</a>&nbsp;&nbsp;(408) 650-8360 ext 2</Card.Subtitle>
            <Card.Text>
              2982 Scott Blvd
              <br></br>
              Santa, Clara, CA 95054
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Carde360;

