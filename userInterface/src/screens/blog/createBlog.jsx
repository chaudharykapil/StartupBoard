import React, { useState } from 'react'
import Header from '../components/Header'
import { BASE_URL, BLOG_CREATE, LOCAL_STORAGE_CURR_USER_KEY } from '../../utils/constant'
import axios from 'axios'

export default function CreateBlog() {
    const u_id = localStorage.getItem(LOCAL_STORAGE_CURR_USER_KEY)
    const [title,setTitle] = useState("")
    const [subtitle,setSubtitle] = useState("")
    const [content,setContent] = useState("")
    const handleTitle = (ev)=>{
        setTitle(ev.target.value)
    }
    const handleSubtitle = (ev)=>{
        setSubtitle(ev.target.value)
    }
    const handleContent = (ev)=>{
        setContent(ev.target.value)
    }
    const handleSubmit = async (ev)=>{
        const data = {
            userid:u_id,
            title:title,
            subtitle:subtitle,
            content:content
        }
        const res = await axios.post(BASE_URL+BLOG_CREATE,data)
        console.log(res)
    }
  return (
    <div className='h-full w-full flex flex-col gap-y-5 '>
        <Header />
        <div className='px-10 space-y-5'>
            <div className='w-full h-14 '>
                <input 
                    value={title}
                    name='title'
                    onChange={handleTitle}
                    className='w-full h-full border-b-2 border-b-gray-200 border-gray-200 text-4xl  p-2 rounded-md'
                    placeholder='Add the title of the blog'
                />
            </div>
            <div className='w-full h-14 '>
                <input 
                    value={subtitle}
                    name='subtitle'
                    onChange={handleSubtitle}
                    className='w-full h-full border-b-2 border-b-gray-200 border-gray-200 text-2xl  p-2 rounded-md'
                    placeholder='Add the Sub title of the blog'
                />
            </div>
            <div>
                <textarea name="content" 
                value={content} 
                onChange={handleContent}
                className='w-full placeholder:text-xl placeholder:text-gray-300 overflow-scroll' 
                placeholder='Add your conent here. HTML like formatting tags are allowed like <b> <i> <u> <ul> <ol> <li> <H1> ... <H6> ' rows="17">
                </textarea>
            </div>
            <div>
                <button
                onClick={handleSubmit}
                className=' rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Post
                </button>
            </div>
        </div>
    </div>
  )
}
