import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

function Card({ item, cardIndex, pageScrollProgress, range, targetScale }) {
  const { title, description, src, link, color } = item
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const cardScale = useTransform(scrollYProgress, range, [1, targetScale])

  return (
    <div ref={container} className='card-container'>
      <motion.div className="card" style={{ scale: cardScale, backgroundColor: color, top: `calc(${cardIndex * 30}px)` }}>
        <div className="card__title">{title}</div>
        <div className="card__row">
          <div className="card__left">
            <div className="card__description">{description}</div>
          </div>
          <div className="card__right">
            <motion.div style={{ scale: imageScale }} className="card__image">
              <img src={src} alt={title} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card