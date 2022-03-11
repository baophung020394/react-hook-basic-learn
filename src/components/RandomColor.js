import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RandomColor.scss';

function getRandomColor() {
  const COLOR_LIST = ['deepplink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function RandomColor() {
  const [color, setColor] = useState('deeppink');

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }
  return (
    <div className='colorBox' style={{ backgroundColor: color }} onClick={handleBoxClick}>
      RandomColor
    </div>
  );
}

RandomColor.propTypes = {};

export default RandomColor;
