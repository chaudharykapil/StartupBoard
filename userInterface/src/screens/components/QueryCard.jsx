import React, { useEffect, useState } from 'react'
import HRLine from './HRLine'
import { getUserDetail } from '../../serverapi/userApi'

function ActionBar({queryid}) {
    return (
        <div className='w-full h-10 flex flex-row gap-x-5 text-3xl font-Fira items-center '>
            <span className='text-base' >100+</span>
            <span className="icon-[pepicons-pencil--handshake] hover:text-blue-500"></span>
            <span className="icon-[pepicons-pencil--handshake-off] hover:text-red-500"></span>
        </div>
    )
}


export default function QueryCard({userid,date,title,content,id}) {
    const datetime = new Date(date)
    const [user,setUser] = useState(null)
    useEffect(()=>{
        getUserDetail(userid).then(u=>{
            setUser(u)
        })
    },[])
  return (
    <div className='w-full flex flex-col font-Fira border-2 shadow-md p-5'>
        <div className='text-gray-500 flex flex-row gap-x-3 items-center'>
            <span className='text-sm'>{user?user.name:""}</span>
            <span className='text-xs'>{datetime.toLocaleDateString() + " " + datetime.toLocaleTimeString()}</span>
        </div>
        <span className='text-2xl font-bold '>{title}</span>
        <span className='text-slate-500'>
            {content}
        </span>
        
        <div className='w-full'>
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" loading='lazy'  alt="" className='w-full h-64 object-none' />
        </div>
        <HRLine />
        <ActionBar queryid = {id} />
    </div>
  )
}
