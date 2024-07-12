import React, { useState } from 'react'
import {BASE_URL, LOCAL_STORAGE_CURR_USER_KEY, QUERY_CREATE} from "../../utils/constant"
import axios from 'axios'
export default function NewQueryCard() {
    const curr_user = localStorage.getItem(LOCAL_STORAGE_CURR_USER_KEY)
    const [query,setQuery] = useState("")
    const [description,setDescription] = useState("")
    const [banner,setBanner] = useState(null)
    const handleQuery = (ev)=>{
        setQuery(ev.target.value)
    }
    const handleDescription = (ev)=>{
        setDescription(ev.target.value)
    }
    const handleImage = (ev)=>{}
    const handleSubmit = async (ev)=>{
        const data = {
            userid:curr_user,
            title:query,
            content:description
        }
        const res = await axios.post(BASE_URL+QUERY_CREATE,data)
        console.log(res)
    }
  return (
    <div className='flex flex-col items-center py-4 gap-y-5 w-full shadow-md border px-10'>
        <span className='text-lg font-Fira font-semibold'>Stuck ? Ask for Help</span>
        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 font-Fira">
                Your Ask
            </label>
            <div className="mt-2">
                <input
                id="name"
                name="name"
                type="text"
                required
                value={query}
                onChange={handleQuery}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 font-Fira">
                Description
            </label>
            <div className="mt-2">
                <textarea
                id="description"
                name="description"
                type="text"
                rows={10}
                onChange={handleDescription}
                value={description}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 font-Fira">
                Add an Image (optional)
            </label>
            <div className="mt-2">
                <input
                id="description"
                name="description"
                type='file'
                className=" rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
        <div className='w-full'>
            <input
            type='button'
            onClick={handleSubmit}
            value={"Add"}
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            />
        </div>
    </div>
  )
}
