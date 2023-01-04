import React from 'react'

const Socialmedia = ({ media }) => (
  <div className="d-flex flex-row  justify-content-center">
    {media.map((Item) => (
      <Item className="rounded-circle socialMedia" key={`media_${Item}`} />
    ))}
  </div>
)

export default Socialmedia
