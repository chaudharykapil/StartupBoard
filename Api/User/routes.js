import {Router} from "express"
import User from "./user_api.js"
const app = Router()

app.get("/",(req,res)=>{
    res.send("Hello User")
})

app.post("/register",async (req,res)=>{
    const data = req.body
    try{
        await User.validate(data)
        await User.create(data)
        res.sendStatus(200)
    }
    catch(e){
        console.log(e)
        res.status(403).send(e._message)
    }
})

app.post("/login",async (req,res)=>{
    const cred = req.body
    const user = await User.findOne(cred).exec()
    if(user){
        res.json(user)
    }
    else{
        res.json(null)
    }
})


app.get("/getuser/:id",async (req,res)=>{
    const id = req.params.id
    const user = await User.findById(id).exec()
    if(user){
        res.json(user)
    }
    else{
        res.json(null)
    }
})



export default app