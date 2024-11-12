import React from 'react'
import Template from '../component/Template'
import SignupImg from '../assets/signup.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="join the millons learning to code with studyNotion for free"
      desc1="Build Skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career"
      image={SignupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login