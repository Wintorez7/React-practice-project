import { useEffect } from "react";
import { useState } from "react"


function App() {

  const[text,setText] = useState(" ");

  // useEffect(() => {
  //   console.log("ui rendering Done")
  // })
  // to handle unmounted of component
  useEffect(() => {
      // add event Listener
      console.log("listener added")

      return() => {
        console.log("listner remove")
      }
    },[text])

 function changeHandler(event){
   setText(event.target.value)
   console.log(text)
 }

  return (
    <div className="bg-gray-500 w-full h-screen justify-center flex "> 
        <div className="mt-5">
          <input className="border-2 " type="text" onChange={changeHandler} />
        </div>
    </div>
  )
}

export default App
