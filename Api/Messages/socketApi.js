import {Server} from  "socket.io"
import Message from "./message_api.js"
export default class MessageIO extends Server{
    static socketlist = {}
    static clientlist = {}
    constructor(httpserver){
        super(httpserver)
        this.on("connection",(socket)=>{
            console.log(socket.request._query)
            const  {u_id} = socket.request._query
            MessageIO.clientlist[socket.id] = u_id
            MessageIO.socketlist[u_id] = socket
//===============================================================================================================

            socket.on("send_message",MessageIO.sendMessage)    
            socket.on("recieve_message",MessageIO.recieveMessage)

//================================================================================================================
            socket.on("test",MessageIO.test)
            socket.on("disconnect",(reason)=>{
                delete MessageIO.socketlist[MessageIO.clientlist[socket.id]]
                delete MessageIO.clientlist[socket.id]
            })
        })
    }

    static sendMessage(...args){
        console.log()
        Message.create({
            sender_id:args[1],
            reciever_id:args[0],
            message_string:args[2]
        }).then((res)=>{
            const reciver_sock = MessageIO.socketlist[args[0]]
            reciver_sock.emit("recieve_message",{
                message:args[2],
                from:args[1]
            })
        },err=>{
            const sender_sock = MessageIO.socketlist[args[1]]
            sender_sock.emit("error",{
                message:"error occure"
            })
        })
        
    }
    static recieveMessage(...args){
        console.log(args)
    }


    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++ TestEvents ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    static test(...args){
        console.log(args)
        this.emit("test",MessageIO.testreturn(this))
    }
    static testreturn(args){
        console.log(Object.keys(MessageIO.clientlist))
        return `hii ${args.client.id}`
    }
    
}
