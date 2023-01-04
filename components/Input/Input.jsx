import React, { useRef, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Input = ({
  id = 'validationText',
  setInputRef,
  type = 'text',
  name = 'username',
  placeholder = 'نام کاربری را وارد کنید',
  pattern = '.{1,}',
  cssAdd = ' ',
}) => {
  const InputRef = useRef(null)
  useEffect(() => {
    setInputRef(InputRef)
  })
  return (
    <input
      css={css`
        ${cssAdd}
      `}
      type={type}
      name={name}
      ref={InputRef}
      className="form-control"
      id={id}
      placeholder={placeholder}
      pattern={pattern}
      required
    />
  )
}

export default Input
