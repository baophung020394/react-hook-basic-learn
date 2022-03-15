import React from 'react';
import PropTypes from 'prop-types';
import './MagicBox.scss';
import useMagicBox from 'Hooks/useMagicBox';

function MagicBox(props) {
  const { color } = useMagicBox();
  // console.log(color);
  return <div className='magic-box' style={{ backgroundColor: color }}></div>;
}

MagicBox.propTypes = {};

export default MagicBox;
