"use client"

import React from 'react';
import './AnimatedSpanContainer.css';

const AnimatedSpanContainer = ({ data }) => {
  const spans = data.map((item, index) => (
    <span key={index} style={{ backgroundColor: item.color }} className="animated-span">
      {item.text}
    </span>
  ));

  return <div className="animated-span-container">{spans}</div>;
};

export default AnimatedSpanContainer;
