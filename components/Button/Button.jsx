import React from 'react'

const Button = ({ children = 'send', typebtn = 'btn-primary' }) => (
  <button className={`btn w-100 mb-2 ${typebtn}`} type="submit">
    {children}
  </button>
)

export default Button
