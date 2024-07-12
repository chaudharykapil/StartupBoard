import React, { useEffect, useState } from 'react'
import { Logout, getUserDetail } from '../../serverapi/userApi'
import { LOCAL_STORAGE_CURR_USER_KEY } from '../../utils/constant'


export default function Header() {
	const userid = localStorage.getItem(LOCAL_STORAGE_CURR_USER_KEY)
	const [user,setUser] = useState(null)
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	}
	useEffect(()=>{
		getUserDetail(userid).then(u=>setUser(u))
	},[])
  return (
    <div className='w-full h-16 sticky top-0 left-0  flex flex-row items-center px-5 shadow-md shadow-slate-500 bg-slate-900 z-10 text-white '>
		<div className='flex-1 flex flex-row gap-x-5 items-center '>
			<span><img src="\src\assets\images\logoImage.png" className='h-9' alt="" /></span>
			<span><img src="\src\assets\images\logoTitle.png" className='h-9' alt="" /></span>
		</div>
		<div className='flex-1 flex flex-row-reverse items-center gap-x-10'>
			<div>
				<div className="relative inline-block text-left">
					<div>
						<button
						type="button"
						className="inline-flex items-center justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-black text-sm font-medium text-gray-300 hover:bg-gray-800 focus:outline-none "
						onClick={toggleDropdown}
						>
						<span class="icon-[mdi--account] text-2xl"></span>
						
						</button>
					</div>

					{isOpen && (
						<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-gray-700 ring-opacity-5">
						<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
							<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
							role="menuitem"
							>
							Account
							</a>

							<div
							onClick={Logout}
							className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:cursor-pointer"
							role="menuitem"
							>
							Logout
							</div>
							
						</div>
						</div>
					)}
					</div>
		
				</div>
			<div>
				<span className='capitalize font-Fira text-2xl'>Hi! { user?user.name:""}</span>
			</div>
			<a href="/user/write">
			<div className='flex flex-row gap-x-5 items-center'>
				<span className="icon-[streamline--chat-bubble-square-write] text-xl"></span>
				<span className='capitalize font-Fira text-2xl'>Write</span>
			</div>
			</a>
		</div>
    </div>
  )
}
