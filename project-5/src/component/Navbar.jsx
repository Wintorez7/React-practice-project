import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between  max-w-[1160px] mx-auto w-11/12'>

        <Link to="/" className='mt-[1.2rem]'>
            <img src={logo} alt='logo' width={160} height={32} loading="lazy"/>
        </Link>

        <nav className=''>
            <ul className='flex gap-9 mt-5'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-4 mt-[1.2rem]'>
            { !isLoggedIn &&    
                <Link to="/login">
                    <button className='bg-richblack-800 hover:bg-richblack-700 transition-all duration-300 text-white py-[8px] px-[12px] rounded-md
                    border border-richblack-700'>
                        Login
                    </button>
                </Link>
            }
            {!isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 hover:bg-richblack-700 transition-all duration-300  text-white py-[8px] px-[12px] rounded-md
                    border border-richblack-700'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link >
                    <button onClick={() => {
                        setIsLoggedIn(false)
                        toast.success("Logged Out")
                    }} className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-md
                    border border-richblack-700'>
                        Logout
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-md
                    border border-richblack-700'>
                        DashBoard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar