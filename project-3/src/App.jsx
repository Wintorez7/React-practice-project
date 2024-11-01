import { useState } from "react"


function App() {

  const [formData, setFormData] = useState(
    {firstName:"", lastName:"", email:"", 
      Comment:"", City:"", ZipCode:"", Comments:true, Candidates:true, mode:"", favCar:""}
  );

  function changehandler(event){
    const{name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value

      } 
    });
  }

  function submithandler(event){
    event.preventDefault()
    console.log("printing form")
    console.log(formData)
  }

  console.log(formData)
  return (
    <div className="w-full h-full flex justify-center "> 
      <form className="w-[50%] shadow-xl border-2  px-4" onSubmit={submithandler}>
        <div className=" py-5">
            <label className="px-2 font-semibold">First Name</label><br />
            <input type="text" name="firstName"  className="border border-black px-2 py-1 rounded-md w-[100%] " placeholder="First Name" onChange={changehandler}
            value={formData.firstName}
            />
            
            <br/> <br/>

            <label className="px-2 font-semibold">Last Name</label><br />
            <input type="text" name="lastName" className="border border-black px-2 py-1 rounded-md w-[100%]"  placeholder="Last Name" onChange={changehandler}
            value={formData.lastName}
            />

            <br/> <br/>

            <label className="px-2 font-semibold">Email</label>
            <input type="email" name="email"  className="border border-black px-2 py-1 rounded-md w-[100%]"  placeholder="email" onChange={changehandler}
            value={formData.email}
            />  

            <br/> <br/>

           
            <label className="mr-2  font-medium ">Country</label><br />
            <select className="border border-black px-2 py-1 rounded-md w-[100%]" onChange={changehandler} name="favCar" value={formData.favCar}>
                <option value="mustang">India</option>
                <option value="camero">Japan</option>
                <option value="lamborgini">America</option>
            </select>

            <br/> <br/>

            <label className="px-2 font-semibold">City</label><br />
            <input type="text" name="City" className="border border-black px-2 py-1 rounded-md w-[100%]"  placeholder="City" onChange={changehandler}
            value={formData.City}
            />
            
            <br/> <br/>

            <label className="px-2 font-semibold">ZIP/Postel Code</label><br />
            <input type="text" name="ZipCode" className="border border-black px-2 py-1 rounded-md w-[100%]"  placeholder="Zip/Postel Code" onChange={changehandler}
            value={formData.ZipCode}
            />
            {/* <label className="px-2 font-semibold">Comments</label>
            <textarea placeholder="Enter your Comment" 
            name="Comment"
            onChange={changehandler}
            value={formData.Comment}
            >
            </textarea> */}

            <br /><br />

            
              <legend className="font-semibold">By Email</legend>
                <input type="checkbox" checked={formData.isVisible} name="Comments" onChange={changehandler}/>
                <label className="ml-2">Comments</label>

                <br /><br />

                <input type="checkbox" checked={formData.isVisible} name="Candidates" onChange={changehandler}/>
                <label className="ml-2">Candidates</label>

                <br /><br />

                <label className="font-semibold">Push Notification</label><br /><br />
                <input type="radio" 
                name="mode" 
                onChange={changehandler}
                value="Online-mode"
                checked={formData.mode === "Online-mode"}
                />
                <label>Same as Email</label>

                <br /><br />

                <input type="radio" 
                name="mode" 
                onChange={changehandler}
                value="Offline-mode"
                checked={formData.mode === "Offline-mode"}
                />
                <label>Everything</label>
           
           
            <br /><br />
            <button className="ml-2 bg-blue-600 px-3 py-2 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
            type="submit">submit</button>
        </div>

      </form>
    </div>
  )
}

export default App
