import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

    const navigate = useNavigate()
    const clickhandler = () => {
        navigate("/about");
    }

  return (
    <div>
        This is Support
        <div>
            <button onClick={clickhandler} className='bg-blue-600 px-2 py-1 rounded-lg
             text-white'>Move to About Page</button>
        </div>
    </div>
  )
}

export default Support