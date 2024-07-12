import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import QueryCard from './components/QueryCard'
import { useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_CURR_USER_KEY } from '../utils/constant'
import NewQueryCard from './components/NewQueryCard'
import { getAllQueries } from '../serverapi/queryApi'
import BlogCard from './components/BlogCard'
import { getAllBlogs } from '../serverapi/blogApi'

function RightSection({}) {
	return (
	  <div className='w-full py-5'>
		<NewQueryCard />
	  </div>
	)
}
function MiddleSection({}) {
	const [queries,setQueries] = useState([])
	const [blogs,setBlogs] = useState([])
	useEffect(()=>{
		getAllQueries().then(v=>setQueries(v))
		getAllBlogs().then(v=>{setBlogs(v)})
	},[])
	return (
	  <div className=' flex flex-col p-5 gap-y-10'>
		{queries.map(q=><QueryCard title={q.title} content={q.content} date={q.createdAt} userid = {q.userid} />)}
		{blogs.map((b)=><BlogCard blogid={b._id} title={b.title} subtitle={b.subtitle} date={b.createdAt} content={b.content} userid={b.userid} />)}
	  </div>
	)
}




export default function Homepage() {
	const navigate = useNavigate()
	const user = localStorage.getItem(LOCAL_STORAGE_CURR_USER_KEY)
	useEffect(()=>{
		if(!user){
			navigate("/user/login")
		}
	},[])
  	return (
	<div className='min-h-screen w-full flex flex-col'>
		<Header />
		<div className='flex flex-row flex-1 gap-x-2 px-32'>
			<div className='flex-[2]  border-r-2 h-full'>
				<MiddleSection />
			</div>
			<div className='sticky top-16 flex-1 h-full hidden md:block'>
				<RightSection />
			</div>
		</div>
	</div>
  )
}
