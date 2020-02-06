import React, { Component } from 'react';
import { render } from "react-dom";
import { WOW } from 'wowjs/dist/wow';

import Hero from "../components/Hero";

class HomePage extends Component {

  componentDidMount() {
    new WOW().init()
  }

  render() {
    const { title, subTitle, text } = this.props;
    return (
      <div className="wow zoomIn slow">
        <Hero
          title={title}
          subTitle={subTitle}
          text={text}
        />
      </div>
    )
  }
}

export default HomePage
