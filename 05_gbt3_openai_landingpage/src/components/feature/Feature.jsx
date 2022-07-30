import React from 'react';
import './Feature.css';

const Feature = ({ title, text, direction, fullWidth }) => {
  console.log(title, fullWidth)
  return (
    <div className="gpt3__features-container__feature" style={{
      flexDirection: direction === 'row' ? 'row' : 'column',
      width: fullWidth ? '100%' : 'auto'
    }}>
      <div className="gpt3__features-container__title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;