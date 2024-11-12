import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const Loginform = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changehandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submithandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }

  return (
    <form onSubmit={submithandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full' type="email" 
             required 
             value={formData.email}
             onChange={changehandler}
             placeholder='Enter Email Id'
             name='email'
            />
        </label>

        <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Password<sup>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full' type={showPassword ? ("text"):("password")} 
             required 
             value={formData.password}
             onChange={changehandler}
             placeholder='Enter Password'
             name='password'
            />

            <span className='flex justify-end -mt-10 py-2 mr-2 text-2xl' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            <Link className='flex text-sm justify-end text-blue-400' to="#">
                <p>Forget Password</p>
            </Link>
        </label>
        
        <button className='bg-yellow-400 mt-5 text-black hover:bg-yellow-500 transition-all duration-300  rounded-lg py-2'>
            Sign In
        </button>
    </form>
  )
}

export default Loginform