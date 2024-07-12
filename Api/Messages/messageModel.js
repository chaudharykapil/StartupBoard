import mongoose, {Schema,model} from "mongoose"

const message_schema = new  Schema({
    sender_id:{type:mongoose.Types.ObjectId,required:true},
    reciever_id:{type:mongoose.Types.ObjectId,required:true},
    message_string:{type:String},
    is_recieved:{type:Boolean,default:false}
},
{
    timestamps:true
})
export default model("messages",message_schema)