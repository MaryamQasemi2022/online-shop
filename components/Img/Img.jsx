import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from 'next/image'

const Img = ({ src }) => (
  <Image
    src={src}
    alt="login image"
    fill
    css={css`
      object-fit: contain;
    `}
    placeholder="blur"
    sizes="100%"
  />
)

export default Img
