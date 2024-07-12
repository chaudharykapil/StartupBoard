import {Router} from "express"
import Blog from "./blog_api.js"
const app = Router()

app.get("/",(req,res)=>{
    res.send("Hello blog")
})
app.post("/create",async (req,res)=>{
    const data = req.body
    try{
        await Blog.validate(data)
        await Blog.create(data)
        res.sendStatus(200)
    }
    catch(e){
        res.status(400).send("Bad request")
    }
})

app.get("/get/all",async (req,res)=>{
    const blogs  = await Blog.find().exec()
    res.json(blogs)
})
app.get("/get/all/:uid",async (req,res)=>{
    const uid = req.params.uid
    const blogs  = await Blog.find({userid:uid}).exec()
    res.json(blogs)
})

app.get("/get/one/:blogid",async (req,res)=>{
    const blogid = req.params.blogid
    const blogs  = await Blog.findById(blogid).exec()
    res.json(blogs)
})

export default app