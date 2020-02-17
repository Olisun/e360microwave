import React, { Component } from 'react';
import { render } from "react-dom";
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Hero from "../../components/hero/Hero";
import "./Home.css";
import DownArrow from "../../components/down-arrow/DownArrow";

class HomePage extends Component {
  render() {
    const { title, subTitle, text, typed } = this.props;
    return (
      <div>
        <div>
          <Hero />
        </div>
      </div>
    )
  }
}

export default HomePage
