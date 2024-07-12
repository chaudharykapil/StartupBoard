import {Router} from "express"
import Query,{QueryInterest} from "./query_api.js"

const app = Router()

//++++++++++++++++++++++++++++++++++++++++++++++++++++ Query Routes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

app.get("/",(req,res)=>{
    res.send("Hello Query")
})

app.post("/create",async (req,res)=>{
    const data  = req.body
    try{
        await Query.validate(data)
        await Query.create(data)
        res.sendStatus(200)
    }
    catch(e){
        res.status(403).send(e._message)
    }
})

app.get("/find/all",async (req,res)=>{
    const queries = await Query.find({}).exec()
    res.json(queries)
})

app.get("/find/all/:user_id",async (req,res)=>{
    const user_id = req.params.user_id
    const queries = await Query.find({userid:user_id}).exec()
    res.json(queries)
})
app.get("/find/category/:category",async (req,res)=>{
    const category = req.params.category
    const queries = await Query.find({category:category}).exec()
    res.json(queries)
})

app.get("/get/:id",async (req,res)=>{
    const id = req.params.id
    try{
        const queries = await Query.findById(id).exec()
        res.json(queries)
    }
    catch{
        res.status(400).send("Bad params")
    }
})


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Query Interest routes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

app.post("/create_interest",async (req,res)=>{
    const data = req.body
    try{
        await QueryInterest.validate(data)
        await QueryInterest.create(data)
        res.sendStatus(200)
    }
    catch(e){
        res.status(400).send(e._message)
    }
})

app.post("/remove_interest",async (req,res)=>{
    const id = req.body["interest_id"]
    try{
        await QueryInterest.findById(id).deleteOne().exec()
        res.sendStatus(200)
    }
    catch(e){
        res.status(400).send("Bad params")
    }
})

app.get("/interest/getall/:queryid",async (req,res)=>{
    const q_id = req.params.queryid
    const result = await QueryInterest.find({queryid:q_id}).exec()
    res.json(result)
})

export default app