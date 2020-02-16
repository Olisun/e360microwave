import React, { Component } from 'react';
import { render } from "react-dom";
import { WOW } from 'wowjs/dist/wow';
import { Row, Col, Container, Image, rounded, fluid } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Hero from "../../components/hero/Hero";
import "./Home.css";
import DownArrow from "../../components/down-arrow/DownArrow";
import Cube from "../../components/cube/Cube";

class HomePage extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    const { title, subTitle, text, typed } = this.props;
    return (
      <div>
        <div className="wow zoomIn">
          {/* <Hero id="hero"
            title={title}
            className="wow zoomIn"
            data-wow-duration="1.5s"
          /> */}
          <Cube />
        </div>
      </div>
    )
  }
}

export default HomePage
