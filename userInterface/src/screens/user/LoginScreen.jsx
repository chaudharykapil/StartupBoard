import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL, USER_LOGIN, LOCAL_STORAGE_CURR_USER_KEY } from '../../utils/constant'

export default function LoginScreen() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleEmail = (ev)=>{
        setEmail(ev.target.value)
    }
    const handlePassword = (ev)=>{
        setPassword(ev.target.value)
    }
    const handleSubmit = async (ev)=>{
        const  data = {
            email:email,
            password:password
        }
        const res = await axios.post(BASE_URL+USER_LOGIN,data)
        console.log(res.data)
        if(res.status == 200 && res.data != null){
            localStorage.setItem(LOCAL_STORAGE_CURR_USER_KEY,res.data._id)
            navigate("/")
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
                Sign in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
    
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <a href="/user/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Register here
                </a>
              </p>
            </div>
          
        </div>
    )
}
