import axios from "axios";
import { BASE_URL, LOCAL_STORAGE_CURR_USER_KEY, QUERY_FIND } from "../utils/constant";

export async function getAllQueries(){
    const curr_user = localStorage.getItem(LOCAL_STORAGE_CURR_USER_KEY)
    let data = []
    const res = await axios.get(BASE_URL+QUERY_FIND)
    data = res.data.filter((v)=>v.userid != curr_user)
    data = data.sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
    return data
}
