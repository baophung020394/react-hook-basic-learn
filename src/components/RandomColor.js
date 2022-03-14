import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RandomColor.scss';

function getRandomColor() {
  const COLOR_LIST = ['deepplink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function RandomColor() {
  // const initColor = localStorage.getItem('box_color') || 'deeppink';
  // console.log(initColor);
  // const [color, setColor] = useState(initColor);

  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }
  return (
    <div
      className='colorBox'
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

RandomColor.propTypes = {};

export default RandomColor;
