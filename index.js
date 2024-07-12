import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./Api/User/routes.js"
import queryRouter from "./Api/Query/routes.js"
import blogRouter from "./Api/Blog/routes.js"
import cors from "cors"
import http from "http"
import bodyParser from "body-parser"
import MessageSocket from "./Api/Messages/socketApi.js"
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user",userRouter)
app.use("/query",queryRouter)
app.use("/blog",blogRouter)
const server = http.createServer(app)
new MessageSocket(server)

app.get("/",(req,res)=>{
    res.send("Hello World")
})


mongoose.connect(process.env.DB_STRING).then(()=>{
    console.log("Database Connected Succesfully")
    server.listen(process.env.PORT,()=>{
        console.log("Listening on http://127.0.0.1:" + process.env.PORT)
    })
},
(err)=>{console.error(err)})

