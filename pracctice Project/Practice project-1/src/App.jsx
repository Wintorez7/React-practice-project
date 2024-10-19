import DropDownMenu from "./commonent/DropDownMenu"

function App() {

  const Menu = [
    {
    itemName:"Nirma1", 
    },
    {
      itemName:"Nirma2",  
    },

    {
      itemName:"Nirma3",   
    }
]; 

  return (
    <div> 
      <DropDownMenu name={Menu[0].itemName}/>
    </div>
  )
}

export default App
