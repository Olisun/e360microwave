import React from 'react';
import { render } from 'react-dom';
import Hero from '..components/Hero';

const HomePage = (props) => {
  const { title, subTitle, text } = this.props;
  return (
    <div>
      <Hero
        title={title}
        subTitle={subTitle}
        text={text}
      />
    </div>
  )
};

export default HomePage;