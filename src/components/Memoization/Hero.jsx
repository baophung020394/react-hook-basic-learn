import React from 'react'
import PropTypes from 'prop-types'

function Hero({name , onClick, data}) {


  console.log('Hero', name);
  return (
    <div>Hero</div>
  )
}

Hero.propTypes = {}

export default React.memo(Hero);
