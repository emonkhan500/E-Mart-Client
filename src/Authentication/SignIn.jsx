import React, { useContext, useState } from 'react';
import signinAnimation from '../../public/SignIn.json';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import 'animate.css';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { signInWithPopup } from 'firebase/auth';
import useAxiosPublic from '../Axios/useAxiosPublic';

const SignIn = () => {
const{login,googleLogin}=useContext(AuthContext)
const axiosPublic=useAxiosPublic()
const navigate=useNavigate()
const [registerError,setRegisterError]=useState()


  const handleLogin = e => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(email, pass);



    login(email,pass)
    .then((result)=>{
      console.log(result.user);
      Swal.fire('Login Successful !')
      navigate('/')
      
    })
    .catch((error)=>{
      setRegisterError(error.message)
    })

  }
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          Swal.fire(`Welcome ${result.user.displayName}`);
          console.log(result.user);
          navigate("/");
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };


  return (
         <div className="flex  items-center py-6 md:py-10 lg:py-16 justify-center ">
      <div className=" lg:w-full lg:max-w-7xl flex flex-col-reverse md:flex-row bg-white rounded-lg  ">

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-green-500 bg-opacity-5">
          <h2 className="animate__animated animate__bounceIn animate__slow text-3xl font-bold text-[#3BB77E] lg:mt-8 mb-2">Welcome back!</h2>
          <p className="text-[#253D4E] text-lg font-semibold">Experience The Best E-Commerce Platform !</p>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4 animate__animated animate__lightSpeedInLeft animate__slow" >
              <label className="text-[#253D4E] block  text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4 animate__animated animate__lightSpeedInRight animate__slow">
              <label className=" text-[#253D4E] block  text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pass"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4 animate__animated animate__lightSpeedInLeft animate__slow">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-[#3BB77E]" />
                <span className="ml-2 text-sm text-[#253D4E]">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#3BB77E] hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="animate__animated animate__lightSpeedInRight w-full text-[#253D4E] font-bold py-2 px-4 rounded-lg border border-green-500 shadow-md hover:bg-[#3BB77E] hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>

           
          </form>
          <button onClick={handleGoogleLogin} className="animate__animated animate__lightSpeedInLeft animate__slow mt-4 w-full text-[#253D4E] font-bold py-2 px-4 rounded-lg border border-green-500 shadow-md hover:bg-[#3BB77E] hover:text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center">
           
           <FaGoogle className='mr-3 text-[#3BB77E] hover:text-black'/>
            Sign In with Google
          </button>
          <p className="text-[#253D4E] mt-6 text-center font-bold">
            Don’t have an account?{'  '}
            <Link to="/signup" className="font-bold text-[#3BB77E]">Sign Up</Link>
          </p>
        </div>

        {/* Lottie Animation Section */}
        <div className="animate__animated animate__bounceIn animate__slow w-full md:w-1/2  p-6 lg:p-10 bg-green-500 bg-opacity-5">
          <Lottie animationData={signinAnimation} className="w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]" />
        </div>
      </div>
    </div>
    );
};

export default SignIn;