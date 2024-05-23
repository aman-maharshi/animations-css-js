import React from 'react'

function Card({ item }) {

  const {title, description, src, link, color} = item
  return (
    <div className='card-container'>
      <div className="card" style={{background: color}}>
        
      </div>
    </div>
  )
}

export default Card