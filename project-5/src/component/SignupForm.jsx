import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        firstName:"", lastName:"", email:"", password:"", confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")


    function changehandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault()
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do Not Match")
            return
        }
        setIsLoggedIn(true)
        toast.success("Account Created")
        navigate("/dashboard")
    }

  return (
    <div>
        {/* student and intructor toggle */}
        <div className="flex w-[15rem] bg-richblack-800 p-1 my-6 rounded-full">
            <button
                onClick={() => setAccountType("student")}
                className={`w-1/2 text-center py-2 rounded-full transition-all duration-200 ${
                    accountType === "student"
                        ? "bg-deepBlue text-white shadow-md"
                        : "text-gray-400 "
                }`}>
                Student
            </button>
            <button
                onClick={() => setAccountType("instructor")}
                className={`w-1/2 text-center py-2 rounded-full transition-all duration-200 ${
                    accountType === "instructor"
                        ? "bg-deepBlue text-white shadow-md"
                        : "text-gray-400 "
                }`}>
                Instructor
            </button>
        </div>


        <form onSubmit={submitHandler}>
            {/* containing only FirstName and lastName */}
            <div className='flex'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name <sup>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] p-[12px] ' type="text" 
                        name="firstName" 
                        onChange={changehandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        required
                        />
                </label>

                <label>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name <sup>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] p-[12px]' type="text" 
                    name="lastName" 
                    onChange={changehandler}
                    placeholder='Enter Last Name'
                    value={formData.lastName}
                    required
                    />
                </label>
            </div>
            {/* Email address */}
            <label>
                    <p className='text-[0.875rem] mt-4 text-white mb-1 leading-[1.375rem]'>Emai Address <sup>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full' type="email" 
                    name="email" 
                    onChange={changehandler}
                    placeholder='Enter Email Address    '
                    value={formData.email}
                    required
                    />
            </label>
            {/* create Password and Confirm Password */}
            <div className='flex space-x-10'>
                <label>
                    <p  className='text-[0.875rem] mt-4 text-white mb-1 leading-[1.375rem]'>Create Password <sup>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] p-[12px]' type={showPassword ? ("text"):("password")} 
                    required
                    name="password" 
                    onChange={changehandler}
                    placeholder='Enter Password'
                    value={formData.password}
                    />
                    <span className='flex justify-end -mt-10 py-2 mr-2 text-2xl' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                {/* confirm Password */}
                <label>
                    <p  className='text-[0.875rem] mt-4 text-white mb-1 leading-[1.375rem]'>Confirm Password <sup>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] p-[12px] ' type={showConfirmPassword ? ("text"):("password")} 
                    required
                    name="confirmPassword" 
                    onChange={changehandler}
                    placeholder='Confirm Password'
                    value={formData.confirmPassword}
                    />
                    <span className='flex justify-end -mt-10 py-2 mr-2 text-2xl' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>
            <button className='bg-yellow-400 mt-5 text-black w-full hover:bg-yellow-500 transition-all duration-300 rounded-lg py-2'>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm