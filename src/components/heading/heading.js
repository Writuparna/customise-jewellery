import React from 'react'

const H1 = (props) => (
  <h1>
    {props.value}
    <span>{props.subvalue}</span>
  </h1>
)
const H2 = (props) => (
  <h2 >
    {props.value}
    <span>{props.subvalue}</span>
  </h2>
)
const H3 = (props) => (
  <h3 >
    {props.value}
    <span>{props.subvalue}</span>
  </h3>
)
const H4 = (props) => (
  <h4>
    {props.value}
    <span>{props.subvalue}</span>
  </h4>
)


export {
  H1,
  H2,
  H3,
  H4
}
