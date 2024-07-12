import React, { useEffect, useState } from 'react'
import { getUserDetail } from '../../serverapi/userApi'

export default function BlogCard({blogid,userid,title,content,subtitle,date}) {
	const [user,setUser] = useState()
	const datetime = new Date(date)
	useEffect(()=>{
		getUserDetail(userid).then(u=>setUser(u))
	})
  	return (
    <div className='w-full border-2 shadow-md p-5 space-y-5'>
		<div className='text-gray-500 flex flex-row gap-x-3 items-center'>
            <span className='text-sm'>{user?user.name:""}</span>
            <span className='text-xs'>{datetime.toLocaleDateString() + " " + datetime.toLocaleTimeString()}</span>
        </div>
        <div className='h-64'>
          <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='flex flex-col gap-y-5'>
          <span className='text-4xl font-medium'>{title}</span>
        </div>
		<span className='clip-text-inline h-14'>{subtitle}</span>
		<div>
			<a href= {"/blog/"+blogid} ><span className='border p-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800'>Read More</span></a>
		</div>
    </div>
  )
}
