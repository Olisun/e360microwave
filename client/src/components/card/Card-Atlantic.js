import React, { Component } from "react";
import { render } from 'react-dom';
import { Card } from "react-bootstrap";

import "./Card.css";

class CardAtlantic extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '27rem' }} className="contact-card">
          <Card.Body>
            <Card.Title>Atlantic Tech Marketing</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:contact@atlantic-tech.com">Adam Cohen</a>&nbsp;&nbsp;(410) 218-5935</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"><a href="mailto:davejanaskie@gmail.com">Dave Janaskie</a>&nbsp;&nbsp;(443) 783-5160</Card.Subtitle>
            <Card.Text>
              1205 Legos Choice,
              <br></br>
              Winfield, MD 21157
              </Card.Text>
            <Card.Link href="http://www.atlanticTechMarketing.com/" target="blank">www.atlanticTechMarketing.com</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CardAtlantic;