import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const TogglePasswordbtn = ({ passwordRef }) => {
  const [showPassword, setShowPassword] = useState(false)
  const Element = passwordRef

  return (
    <button
      css={css`
        border: none;
        background-color: inherit;
        outline: none;
      `}
      type="button"
      className="password-toggle-btn"
      onClick={() => {
        setShowPassword(!showPassword)
        Element.current.type =
          Element.current.type === 'password' ? 'text' : 'password'
      }}
    >
      {!showPassword ? <BsEye /> : <BsEyeSlash />}
    </button>
  )
}
export default TogglePasswordbtn
