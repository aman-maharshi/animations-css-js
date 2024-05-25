import { useState } from "react";
import { cardsData } from "./data";
import Card from "./Card"

function App() {
  const [data, setData] = useState(cardsData)

  return (
    <>
      <div className="header"></div>
      <div className="main">
        {data.map((item, index) => {
          return (
            <Card key={index} item={item} />
          )
        })}
      </div>
      <div className="footer"></div>
    </>
  )
}

export default App;
