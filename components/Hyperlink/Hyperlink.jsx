import React from 'react'
import Link from 'next/link'

const Hyperlink = ({ title = 'hi', href = '/' }) => (
  <Link href={href}>
    <span className="fw-normal  ">{title}</span>
  </Link>
)

export default Hyperlink
