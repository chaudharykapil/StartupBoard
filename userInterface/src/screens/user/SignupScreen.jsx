import React, { useState } from 'react'
import axios from "axios";
import { BASE_URL, USER_REGISTER } from '../../utils/constant'
import { useNavigate } from 'react-router-dom';

export default function SignupScreen() {
    const navigate = useNavigate()
    const [fullname,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleFullname = (ev)=>{
        console.log(ev.target.value)
        setFullName(ev.target.value)
    }
    const handleEmail = (ev)=>{
        setEmail(ev.target.value)
    }
    const handlePassword = (ev)=>{
        setPassword(ev.target.value)
    }
    const handleSubmit = async (ev)=>{
        const  data = {
            name:fullname,
            email:email,
            password:password
        }
        const res = await axios.post(BASE_URL+USER_REGISTER,data)
        console.log(res)
        if(res.status == 200){
            navigate("/user/login")
        }

    }
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-900'>
        <div className="sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-32 w-auto"
            src="\src\assets\images\logoImage.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Register to Startup Board
          </h2>
        </div>

        <div className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullname}
                  onChange={handleFullname}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmail}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePassword}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login here
            </a>
          </p>
        </div>
      
    </div>
  )
}
