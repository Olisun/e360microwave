import React, { Component } from "react";
import { render } from 'react-dom';

import "./DownArrow.css"

class DownArrow extends Component {
  render() {
    return (
      <div>
        <div className="down-arrow-container">
          <a data-scroll href="#full">
            <div className="arrow"></div>
          </a>
        </div>
        <div id="full"></div>
      </div>
    )
  }
};

export default DownArrow;
