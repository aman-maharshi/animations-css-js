import React from 'react'

function Card({ item }) {

  const { title, description, src, link, color } = item
  return (
    <div className='card-container'>
      <div className="card" style={{ background: color }}>
        <div className="card__title">{title}</div>
        <div className="card__row">
          <div className="card__left">
            <div className="card__description">{description}</div>
            <div className="card__link">
              <a href={link} target="_blank" rel="noreferrer">Go to website</a>
            </div>
          </div>
          <div className="card__right">
            <div className="card__image">
              <img src={src} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card