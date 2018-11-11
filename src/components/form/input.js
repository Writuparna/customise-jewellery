import React from 'react'

const Input = (props) => (
  <div className="form-group">
      <label>{props.label}</label>
      <input type={props.inputtype} name={props.inputname} value={props.inputvalue} placeholder={props.inputplaceholder}
      onChange={props.onChangeEvent}/>
  </div>
)



export default Input
