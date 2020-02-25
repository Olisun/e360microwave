import React, { Component } from "react";
import { render } from 'react-dom';

// import ModalNumberPdf from "../../components/ModelNumberPdf";

class ModelNumbers extends Component {
  render() {
    return (
      <div className="container">
        <h1>Model Numbers Page</h1>
        <p>Download master model numbering chart here.</p>
        {/* <ModalNumberPdf /> */}
      </div>
    )
  }
};

export default ModelNumbers;
