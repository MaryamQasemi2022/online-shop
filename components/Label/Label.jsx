import React from 'react'

const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className={`form-label d-block position-relative  `}>
    {children}
  </label>
)

export default Label
