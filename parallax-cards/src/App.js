import { useState } from "react";
import { cardsData } from "./data";
import Card from "./Card"

function App() {
  const [data, setData] = useState(cardsData)

  return (
    <div>
      {data.map((item, index) => {
        return (
          <Card key={index} item={item} />
        )
      })}
    </div>
  )
}

export default App;
