import mongoose, {Schema,model} from "mongoose"

const blog_schema = new  Schema({
    userid:{type:mongoose.Types.ObjectId,required:true},
    title:{type:String,required:true},
    subtitle:{type:String},
    banner:{type:String},
    content:{type:String,required:true},
},
{
    timestamps:true
})
export default model("blogs",blog_schema)