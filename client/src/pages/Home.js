import React from "react";
import { render } from "react-dom";
import Hero from "../components/Hero";

const HomePage = (props) => {
  return (
    <div>
      <Hero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />
    </div>
  )
};

export default HomePage;