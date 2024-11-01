

function App() {

  function changehandler(event){
    console.log(event.target.value)
  }

  return (
    <div className="w-full bg-gray-500 h-screen flex justify-center "> 
      <form>
        <label className="px-2">First Name</label>
        <input type="text" placeholder="FirstName" onChange={changehandler}/>
      </form>
    </div>
  )
}

export default App
