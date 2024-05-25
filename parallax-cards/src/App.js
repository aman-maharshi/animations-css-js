import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import { cardsData } from "./data";
import Card from "./Card"
import Lenis from 'lenis'

function App() {
  const [data, setData] = useState(cardsData)

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  // useEffect(() => {
  //   scrollYProgress.on("change", e => console.log(scrollYProgress.current))
  // }, [])


  const lenis = new Lenis()

  // lenis.on('scroll', (e) => {
  //   console.log(e)
  // })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div ref={container}>
      <div className="header"></div>
      <div className="main">
        {data.map((item, index) => {
          const targetScale = 1 - ((data.length - index) * 0.05)
          console.log(targetScale)

          return (
            <Card
              key={index}
              cardIndex={index}
              item={item}
              pageScrollProgress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App;
