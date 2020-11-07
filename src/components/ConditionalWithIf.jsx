import React from 'react'
import If from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <div>
      <h2>The number is {props.number}</h2>
      <If test={props.number % 2 === 0}>
        <span>even</span>
      </If>
      <If test={props.number % 2 === 1}>
        <span>odd</span>
      </If>
    </div>
  )
}