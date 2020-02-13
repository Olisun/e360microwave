import React, { Component } from "react";
import { render } from 'react-dom';
import { WOW } from 'wowjs/dist/wow';

import "./LandingPage.css";
import Hero from "../../components/hero/Hero";

class LandingPage extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="container">
        <Hero />
        <h1>LANDING PAGE WORKS</h1>
      </div>
    )
  }
};

export default LandingPage;

