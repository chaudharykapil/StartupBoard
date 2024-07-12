import axios from "axios";
import { BASE_URL, LOCAL_STORAGE_CURR_USER_KEY, USER_GET_DETAIL } from "../utils/constant";

export async function getUserDetail(userid) { 
    const res =await axios.get(BASE_URL+USER_GET_DETAIL+userid)
    return res.data
}

export function Logout(){
    localStorage.removeItem(LOCAL_STORAGE_CURR_USER_KEY)
    window.location = "/user/login"
}