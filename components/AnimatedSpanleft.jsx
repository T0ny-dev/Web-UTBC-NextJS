"use client"

import React from 'react';
import './AnimatedSpanleft.css';

const AnimatedSpanleft = ({ data }) => {
  const spans = data.map((item, index) => (
    <span key={index} style={{ backgroundColor: item.color }} className="animated-span__left">
      {item.text}
    </span>
  ));

  return (
  <div className='space__blank'>
    <div className='space'></div>
    <div className="animated-container-left">
      {spans}
    </div>
    <div className='space'></div>
  </div>
  )
};

export default AnimatedSpanleft;
