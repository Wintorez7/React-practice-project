import React from 'react'
import loginImage from '../assets/login.png'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import Loginform from './Loginform'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0 flex-row'>

        <div className='w-11/12 max-w-[450px] '>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

            <p className='text-gray-200 text-[1.125rem] leading-[1.625] mt-4'>
              <span>{desc1}</span><br />
              <span className='text-blue-300 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) 
            : (<Loginform setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
              <div className='w-full h-[1px] bg-richblack-700'></div>
              <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
              <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='text-white font-medium rounded-[8px] border 
            border-richblack-700 w-full flex justify-center items-center gap-x-3 py-[8px] px-[12px] mt-6'>
                <FcGoogle/>
                <p>Sign in with Google</p>
            </button>

        </div>

        <div className=' relative w-11/12 max-w-[450px]'>
          <img src={frameImage} width={558} height={504} loading='lazy' alt="image1" />
          <img className=' absolute -top-4 right-4' src={loginImage} width={558} height={504} loading='lazy' alt="imag2" />
        </div>

    </div>
  )
}

export default Template