import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserDetail } from '../../serverapi/userApi'
import { getBlogDetail } from '../../serverapi/blogApi'

export default function BlogPage() {
  const {id} = useParams()
  const [user,setUser] = useState()
  const [blog,setBlog] = useState()
  useEffect(()=>{
    loadBlog()
  },[])
  const loadBlog = async()=>{
    const data = await getBlogDetail(id)
    console.log(data)
    const u = await getUserDetail(data.userid)
    setBlog(data)
    setUser(u)
  }
  return (
    
    <div className='flex flex-col w-screen h-screen'>
      { blog && user ?
      <>
        <div className='flex flex-col w-full h-96 justify-center items-center text-white gap-y-4' style={{backgroundImage:"url('https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-3840x2160-8324.png')",backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
            <span className='text-[4rem] font-medium'>{blog.title}</span>
            <span className='text-lg text-center w-4/6 '>{blog.subtitle}</span>
            <span className='text-slate-500'>Posted by <span className='font-medium'>{user.name}</span> { new Date(blog.createdAt).toLocaleDateString() +" - "+ new Date(blog.createdAt).toLocaleTimeString()}</span>

        </div>
        <div className='flex-1   font-Fira'>
            <iframe className='w-full h-full p-10' style={{fontSize:2.3}} srcDoc={blog.content} />
        </div>
        </>
        :
        null
        }
    </div>
    
  )
}
