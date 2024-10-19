import { useState } from "react";
import Tours from "./commonent/Tours"
import data from "./data"

function App() {

  const [tours,setTours] = useState(data)

  function removeTour(id){
     const newTours = tours.filter(tour => tour.id !== id);
     setTours(newTours);   
  }

  return (
    <div>     
        <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App
