import React, { Component } from "react";
import { render } from 'react-dom';

import Hero from '../components/Hero';

class AboutPage extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <Hero
          title={title}
        />
      </div>
    )
  }
};

export default AboutPage;