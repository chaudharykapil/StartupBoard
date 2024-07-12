import axios from "axios"
import { BASE_URL, BLOG_GET_ALL, BLOG_GET_ONE, LOCAL_STORAGE_CURR_USER_KEY } from "../utils/constant"

export async function getBlogDetail(id) { 
    const res = await axios.get(BASE_URL+BLOG_GET_ONE+id)
    console.log(res)
    return res.data
}

export async function getAllBlogs() {
    const userid  = localStorage.getItem(LOCAL_STORAGE_CURR_USER_KEY)
    const res = await axios.get(BASE_URL+BLOG_GET_ALL)
    let data = res.data.filter((b)=>b.userid != userid)
    console.log(data)
    data = data.sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
    return data
}
