import React from 'react'
import PropTypes from 'prop-types'

function List({list}) {
  return (
    <ul>
      { list && list.map(l => (
        <li key={l.id}>{l.title}</li>
      ))}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array
}

List.defaultProps = {
  list: []
}

export default List
