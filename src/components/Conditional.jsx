import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <div>
      <h2>The number is {props.number}</h2>
      { props.number % 2 === 0 
        ? <span>even</span>
        : <span>odd</span>
      }
    </div>
  )
}