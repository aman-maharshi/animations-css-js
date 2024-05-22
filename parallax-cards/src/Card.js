import React from 'react'

function Card({ item }) {

  const {title, description, src, link, color} = item
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card